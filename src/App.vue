<template>
  <div id="app">
    <templater/>
  </div>
</template>

<script>
import Templater from '@/components/Templater.vue';

export default {
  name: 'MailGenerator',
  components: {
    Templater,
  },
};
</script>

<style lang="scss">
  @import '/styles/settings.scss';
  @import '../node_modules/bulma/bulma.sass';
</style>
