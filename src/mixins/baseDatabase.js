import * as Database from '@/database/database';
import { mapGetters, mapMutations } from 'vuex';

const baseDatabase = {
  data() {
    return {
      subs: [],
    };
  },
  async mounted() {
    await Database.default();
    this.setDB(window.dbs[0]);
    this.subs.push(this.db.projects.find().$.subscribe((results) => {
      this.setProjects(results);
    }));
    this.subs.push(this.db.templates.find().$.subscribe((results) => {
      this.setTemplates(results);
    }));
    this.subs.push(this.db.elements.find().$.subscribe((results) => {
      this.setElements(results);
    }));
  },
  computed: {
    ...mapGetters([
      'db',
    ]),
  },
  methods: {
    ...mapMutations([
      'setDB',
      'setProjects',
      'setTemplates',
      'setElements',
    ]),
  },
};

export { baseDatabase as default };
