<template>
  <base-layout>
    <template slot="aside">
      <project-menu/>
    </template>
    <base-main>
      <h5 class="title is-5">
        {{ $t('archiveProject') | capitalize }}
      </h5>
      <p>{{ $t('areYouSureProject') | capitalize }}</p>
      <base-buttons
        :cancelling="cancelling"
        :submitting="submitting"
        action="archive"
        element="project"
        :dangerousAction="true"
        v-on:cancel-action="cancel"
        v-on:perform-action="performAction"/>
    </base-main>
  </base-layout>
</template>

<script>
import { mapMutations } from 'vuex';
import baseButtonState from '@/mixins/baseButtonState';
import errorHandling from '@/mixins/errorHandling';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const BaseMain = () => import(/* webpackChunkName: "base" */ '@/components/BaseMain.vue');
const ProjectMenu = () => import(/* webpackChunkName: "base" */ '@/components/ProjectMenu.vue');

export default {
  name: 'ProjectArchive',
  props: {
    project: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    BaseMain,
    ProjectMenu,
  },
  mixins: [baseButtonState, errorHandling],
  methods: {
    ...mapMutations([
      'clearSelectedProject',
      'clearSelectedTemplate',
    ]),
    cancel() {
      this.cancelling = true;
      if (!this.$lodash.isEmpty(this.project)) {
        this.project.resync();
      }
      this.cancelling = false;
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      this.submitting = true;
      this.archiveProject();
    },
    async archiveProject() {
      this.project.archived = true;
      try {
        await this.project.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      this.clearSelectedProject();
      this.clearSelectedTemplate();
      this.submitting = false;
      this.$router.push({ name: 'projects' });
    },
  },
};
</script>
