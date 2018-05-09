<template>
  <div id="templater">
    <main-menu/>
    <user-modal/>
  </div>
</template>

<script>
import MainMenu from '@/components/Templater/MainMenu.vue';
import UserModal from '@/components/Templater/UserModal.vue';

export default {
  name: 'Templater',
  components: {
    MainMenu,
    UserModal,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#templater {
  height: 100%;
  display:grid;
  grid-template-columns: 17% 1fr 25%;
  grid-template-rows: 3em 90vh;
  grid-template-areas:
    "mainmenu mainmenu mainmenu"
    "menu buttons buttons"
    "menu preview settings";
}
</style>
