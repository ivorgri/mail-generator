import * as Database from '@/database/database';
import { mapGetters, mapMutations, mapActions } from 'vuex';

const baseDatabase = {
  data() {
    return {
      loadingProjects: true,
      loadingTemplates: true,
      loadingElements: true,
      loadingState: true,
      subs: [],
    };
  },
  async mounted() {
    let db;
    try {
      db = await Database.default();
    } catch (error) {
      console.log(error);
    }
    this.setDB(db);
    this.subs.push(this.db.projects.find().$.subscribe((results) => {
      this.setProjects(results);
      this.loadingProjects = false;
    }));
    this.subs.push(this.db.templates.find().$.subscribe((results) => {
      this.setTemplates(results);
      this.loadingTemplates = false;
    }));
    this.subs.push(this.db.elements.find().$.subscribe((results) => {
      this.setElements(results);
      this.loadingElements = false;
    }));
  },
  computed: {
    ...mapGetters([
      'db',
      'interfaceState',
      'selectedProject',
      'projectById',
    ]),
    databaseIsLoading() {
      return this.coreDataIsLoading ||
        this.loadingState;
    },
    coreDataIsLoading() {
      return this.loadingProjects &&
      this.loadingTemplates &&
      this.loadingElements;
    },
  },
  methods: {
    ...mapMutations([
      'setDB',
      'setProjects',
      'setTemplates',
      'setElements',
      'setInterfaceState',
    ]),
    ...mapActions([
      'setInitialInterfaceState',
      'updateInterfaceState',
      'selectProject',
    ]),
    async initState() {
      let interfaceState;
      try {
        interfaceState = await this.db.state.findOne('current').exec().then(doc => doc);
      } catch (error) {
        console.log(error);
      }
      if (interfaceState) {
        this.$i18n.locale = interfaceState.locale;
        this.setInterfaceState(interfaceState);
        if (interfaceState.selectedProjectId !== '') {
          const project = this.projectById(interfaceState.selectedProjectId);
          try {
            await this.selectProject(project);
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        this.setInitialInterfaceState(this.$i18n.locale);
      }
      this.loadingState = false;
    },
  },
  watch: {
    coreDataIsLoading(newValue) {
      if (newValue === false) {
        this.initState();
      }
    },
  },
};

export { baseDatabase as default };
