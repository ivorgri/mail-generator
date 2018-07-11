<template>
  <base-layout>
    <template slot="aside">
      <project-menu/>
    </template>
    <project
      action="edit"
      :project="project"/>
  </base-layout>
</template>

<script>
const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const ProjectMenu = () => import(/* webpackChunkName: "base" */ '@/components/ProjectMenu.vue');
const Project = () => import(/* webpackChunkName: "project" */ '@/views/Project.vue');

export default {
  name: 'ProjectEdit',
  props: {
    project: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    ProjectMenu,
    Project,
  },
};
</script>
