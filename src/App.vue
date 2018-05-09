<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Templater from './components/Templater.vue';

export default {
  name: 'MailGenerator',
  components: {
    Templater,
  },
};
</script>

<style lang="scss">
  @import '/styles/settings.scss';
</style>
