<template>
  <base-layout>
    <template slot="aside">
      <template-menu/>
    </template>
    <templateForm
      action="edit"
      :template="template"/>
  </base-layout>
</template>

<script>
const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const TemplateMenu = () => import(/* webpackChunkName: "template" */ '@/components/TemplateMenu.vue');
const TemplateForm = () => import(/* webpackChunkName: "template" */ '@/views/Template.vue');

export default {
  name: 'TemplateEdit',
  props: {
    template: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    TemplateMenu,
    TemplateForm,
  },
};
</script>
