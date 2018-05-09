<template>
  <div class="templater">
  </div>
</template>

<script>
export default {
  name: 'Templater',
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
    "usermenu buttons buttons"
    "menu preview settings";
}
</style>
