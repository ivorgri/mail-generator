<template>
  <base-layout>
    <template slot="aside">
      <project-menu/>
    </template>
  </base-layout>
</template>

<script>
const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const ProjectMenu = () => import(/* webpackChunkName: "base" */ '@/components/ProjectMenu.vue');

export default {
  name: 'Projects',
  components: {
    BaseLayout,
    ProjectMenu,
  },
};
</script>
