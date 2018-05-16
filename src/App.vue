<template>
  <div id="app">
    <main-menu v-if="databaseCreated"/>
    <router-view v-if="databaseCreated"/>
    <div v-if="!databaseCreated" id="init-database">
      <div id="init-database-message">
        <h5 class="title is-5">Initializing databases</h5>
        <span class="icon fa-3x">
          <i class="fas fa-cog fa-spin" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import PouchDB from 'pouchdb';
import * as Database from '@/database/database';

// import Templater from '@/components/Templater.vue';
import MainMenu from '@/components/MainMenu.vue';
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'MailGenerator',
  components: {
    MainMenu,
  },
  data() {
    return {
      databaseCreated: false,
      subs: [],
    };
  },
  async mounted() {
    this.databaseCreated = await Database.default(this.$store);
    this.subs.push(this.db.users.find().$.subscribe((results) => {
      this.updateUsers(results);
    }));
    this.subs.push(this.db.templatecollections.find().$.subscribe((results) => {
      this.updateCollections(results);
    }));
    this.subs.push(this.db.templates.find().$.subscribe((results) => {
      this.updateTemplates(results);
    }));
  },
  computed: {
    ...mapGetters([
      'db',
    ]),
  },
  methods: {
    ...mapActions([
      'updateUsers',
      'updateCollections',
      'updateTemplates',
    ]),
  },
};
</script>

<style lang="scss">
  @import '/styles/settings.scss';
  @import '../node_modules/bulma/bulma.sass';

  #app {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 3em auto;
    grid-template-areas: "navbar"
    "view";
  }

  #init-database {
    height: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
    ". . ."
    ". message ."
    ". . .";

    #init-database-message {
      grid-area: message;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .section {
    grid-area: view;
    overflow: auto;
  }

  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
</style>
