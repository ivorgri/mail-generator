<template>
  <base-layout>
    <template slot="aside">
      <template-menu/>
    </template>
    <elements v-if="elementsExist"/>
    <template slot="element">
      <!--
        Key is added so element gets updated
        https://laracasts.com/discuss/channels/vue/vue-2-reload-component-when-same-route-is-requested
      -->
      <div :key="element.id">
        <h5 class="title is-5">
          {{ $t('archiveElement') | capitalize }}
        </h5>
        <p>{{ $t('areYouSureElement') | capitalize }}</p>
        <base-buttons
          :cancelling="cancelling"
          :submitting="submitting"
          :action="action"
          element="elements"
          :dangerousAction="true"
          v-on:cancel-action="cancel"
          v-on:perform-action="performAction"/>
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import baseButtonState from '@/mixins/baseButtonState';
import errorHandling from '@/mixins/errorHandling';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const TemplateMenu = () => import(/* webpackChunkName: "template" */ '@/components/TemplateMenu.vue');
const Elements = () => import(/* webpackChunkName: "elements" */ '@/views/Elements.vue');

export default {
  name: 'ElementsArchive',
  mixins: [baseButtonState, errorHandling],
  props: {
    element: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    TemplateMenu,
    Elements,
  },
  computed: {
    ...mapGetters([
      'elementsExist',
    ]),
  },
  methods: {
    cancel() {
      this.cancelling = true;
      if (!this.$lodash.isEmpty(this.element)) {
        this.element.resync();
      }
      this.cancelling = false;
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      this.submitting = true;
      this.archiveElement();
    },
    async archiveElement() {
      this.element.archived = true;
      try {
        await this.element.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      this.submitting = false;
      this.$router.push({ name: 'templates' });
    },
  },
};
</script>
