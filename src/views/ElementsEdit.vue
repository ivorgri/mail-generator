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
      <element-form
        action="edit"
        :element="element"
        :key="element.id"/>
    </template>
  </base-layout>
</template>

<script>
import { mapGetters } from 'vuex';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const TemplateMenu = () => import(/* webpackChunkName: "template" */ '@/components/TemplateMenu.vue');
const Elements = () => import(/* webpackChunkName: "elements" */ '@/views/Elements.vue');
const ElementForm = () => import(/* webpackChunkName: "elements" */ '@/views/Element.vue');

export default {
  name: 'ElementsEdit',
  props: {
    element: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    TemplateMenu,
    Elements,
    ElementForm,
  },
  computed: {
    ...mapGetters([
      'elementsExist',
    ]),
  },
};
</script>
