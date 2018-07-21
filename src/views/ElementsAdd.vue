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
