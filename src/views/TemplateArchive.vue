<template>
  <base-layout>
    <template slot="aside">
      <template-menu/>
    </template>
    <base-main>
      <h5 class="title is-5">
        {{ $t('archiveTemplate') | capitalize }}
      </h5>
      <p>{{ $t('areYouSureTemplate') | capitalize }}</p>
      <base-buttons
        :cancelling="cancelling"
        :submitting="submitting"
        action="archive"
        element="template"
        :dangerousAction="true"
        v-on:cancel-action="cancel"
        v-on:perform-action="performAction"/>
    </base-main>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
import baseButtonState from '@/mixins/baseButtonState';
import errorHandling from '@/mixins/errorHandling';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const BaseMain = () => import(/* webpackChunkName: "base" */ '@/components/BaseMain.vue');
const TemplateMenu = () => import(/* webpackChunkName: "template" */ '@/components/TemplateMenu.vue');

export default {
  name: 'TemplateArchive',
  mixins: [baseButtonState, errorHandling],
  components: {
    BaseLayout,
    BaseMain,
    TemplateMenu,
  },
  props: {
    template: {
      type: Object,
    },
  },
  methods: {
    ...mapActions([
      'clearSelectedTemplate',
    ]),
    cancel() {
      this.cancelling = true;
      if (!this.$lodash.isEmpty(this.template)) {
        this.template.resync();
      }
      this.cancelling = false;
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      this.submitting = true;
      this.archiveTemplate();
    },
    async archiveTemplate() {
      this.template.archived = true;
      try {
        await this.template.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      try {
        await this.clearSelectedTemplate();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      this.submitting = false;
      this.$router.push({ name: 'projects' });
    },
  },
};
</script>
