<template>
  <div id="app">
    <!-- <templater/> -->
    <main-menu v-if="db"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view v-if="db"/>
  </div>
</template>

<script>
import * as Database from '@/database/database';

// import Templater from '@/components/Templater.vue';
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'MailGenerator',
  components: {
    MainMenu,
  },
  data() {
    return {
      db: null,
    };
  },
  async mounted() {
    this.db = await Database.default();
  },
};
</script>

<style lang="scss">
  @import '/styles/settings.scss';
  @import '../node_modules/bulma/bulma.sass';
</style>
