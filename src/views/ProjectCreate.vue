<template>
  <base-layout>
    <template slot="aside">
      <project-menu/>
    </template>
    <project action="create"/>
  </base-layout>
</template>

<script>
const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const ProjectMenu = () => import(/* webpackChunkName: "base" */ '@/components/ProjectMenu.vue');
const Project = () => import(/* webpackChunkName: "project" */ '@/views/Project.vue');

export default {
  name: 'ProjectCreate',
  components: {
    BaseLayout,
    ProjectMenu,
    Project,
  },
};
</script>
