<template>
  <div id="app" data-qa="app">
    <loading-database v-if="databaseIsLoading"
      :loadingProjects="loadingProjects"
      :loadingTemplates="loadingTemplates"
      :loadingElements="loadingElements"
      :loadingState="loadingState"/>
    <main-menu v-if="!databaseIsLoading"/>
    <router-view v-if="!databaseIsLoading" :key="$route.fullPath"/>
    <error-messages/>
  </div>
</template>

<script>
import 'vue-form-generator/dist/vfg.css';
import { mapGetters } from 'vuex';
import baseDatabase from '@/mixins/baseDatabase';

const LoadingDatabase = () => import(/* webpackChunkName: "loadingDatabase" */ '@/components/LoadingDatabase.vue');
const MainMenu = () => import(/* webpackChunkName: "mainMenu" */ '@/components/MainMenu.vue');
const ErrorMessages = () => import(/* webpackChunkName: "errorMessages" */ '@/components/ErrorMessages.vue');

export default {
  name: 'MailGenerator',
  components: {
    LoadingDatabase,
    MainMenu,
    ErrorMessages,
  },
  mixins: [baseDatabase],
  computed: {
    ...mapGetters([
      'db',
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

  .menu-list {
    a {
      display: flex;
      align-items: center;

      .icon {
        margin: 0px 5px;
      }
    }
  }

  .icon {
    margin-right: 5px;
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
