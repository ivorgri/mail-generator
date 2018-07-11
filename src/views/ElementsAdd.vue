<template>
  <base-layout>
    <template slot="aside">
      <template-menu/>
    </template>
    <element-form action="add"/>
  </base-layout>
</template>

<script>
const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const TemplateMenu = () => import(/* webpackChunkName: "template" */ '@/components/TemplateMenu.vue');
const ElementForm = () => import(/* webpackChunkName: "elements" */ '@/views/Element.vue');

export default {
  name: 'ElementsCreate',
  components: {
    BaseLayout,
    TemplateMenu,
    ElementForm,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';

.section {
  grid-template-columns: 200px 1fr 300px;
  grid-template-areas: "templatemenu elements elementeditor";
}
</style>
