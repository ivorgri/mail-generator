<template>
  <div id="app" data-qa="app">
    <loading-database v-if="!databaseCreated"/>
    <main-menu v-if="databaseCreated"/>
    <router-view v-if="databaseCreated"/>
  </div>
</template>

<script>
import * as Database from '@/database/database';
import 'vue-form-generator/dist/vfg.css';
import { mapGetters, mapMutations, mapActions } from 'vuex';

const LoadingDatabase = () => import(/* webpackChunkName: "loadingDatabase" */ '@/components/LoadingDatabase.vue');
const MainMenu = () => import(/* webpackChunkName: "mainMenu" */ '@/components/MainMenu.vue');

export default {
  name: 'MailGenerator',
  components: {
    LoadingDatabase,
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
    this.subs.push(this.db.elements.find().$.subscribe((results) => {
      this.updateElements(results);
    }));
  },
  watch: {
    $route(to) {
      this.setAction(to.meta.action === undefined ? '' : to.meta.action);
      this.setElement(to.meta.element === undefined ? '' : to.meta.element);
    },
  },
  computed: {
    ...mapGetters([
      'db',
    ]),
  },
  methods: {
    ...mapMutations([
      'setAction',
      'setElement',
    ]),
    ...mapActions([
      'updateUsers',
      'updateCollections',
      'updateTemplates',
      'updateElements',
    ]),
  },
};
</script>

<style lang="scss">
  @import '/styles/settings.scss';
  @import '../node_modules/bulma/bulma.sass';

  #app {
    height: 100vh;
    display: grid;
    grid-template-rows: $menu-height $row-height;
    grid-template-areas: "mainmenu"
      "container";
    /* grid-template-columns: 200px auto 200px;
    grid-template-areas: "mainmenu mainmenu mainmenu"
      "aside preview element"; */
  }

  .section {
    grid-area: container;
    padding: 0;
    display: grid;
    grid-template-columns: 200px auto 300px;

    > aside, > main {
      border-right: $border-color $border-size $border-style;
    }

    > * {
      padding: 1em 0.5em;
      overflow-y: auto;
      overflow-x: hidden;
    }


  }

  /* .menu {
    grid-area: aside;
    border: 1px solid blue;
    overflow: auto;
    padding: 5px;
  }

  #preview {
    grid-area: preview;
    border: 1px solid green;
    overflow: auto;
  }

  #element {
    grid-area: element;
    border: 1px solid yellow;
    overflow: auto;
  }

  /* .section {
    height: -webkit-calc(100% - 20px);
    overflow: hidden;
    display: grid;
    grid-template-columns: 200px 1fr;
    padding: 0;

    aside {
      height: 100%;
      padding: 1em 0.5em;
      border-right: $border-color $border-size $border-style;

      .menu-list li a {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .icon {
        visibility: hidden;
      }
      .is-active:hover .icon,
      a:hover .icon {
        visibility: visible;
      }
    }

    .settings {
      overflow-y: auto;
      overflow-x: hidden;
      padding: 1em 0.5em;
    }
  } */

  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }
</style>
