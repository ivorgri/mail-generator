<template>
  <base-layout>
    <template slot="aside">
      <template-menu/>
    </template>
    <elements v-if="elementsExist"/>
    <!-- <templateForm
      v-if="(interfaceAction === 'create'
        || interfaceAction === 'edit')
        && interfaceElement === 'template'"
      :template="template"/>
    <downloadTemplate
      v-if="interfaceAction === 'download'
        && interfaceElement === 'template'"
      :template="template"/>
    <add-elements v-if="interfaceAction === 'add'
      && interfaceElement === 'elements'"/>
    <elements v-if="selectedTemplateId
      && (interfaceAction === '' || interfaceAction === 'edit')
      && (interfaceElement === '' || interfaceElement === 'element')
      && elementsExist"/>
    <template slot="element">
      <edit-element v-if="interfaceAction === 'edit' &&
        interfaceElement === 'element'"
        :elementToEdit="selectedElement"/>
    </template> -->
  </base-layout>
</template>

<script>
import { mapGetters } from 'vuex';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const TemplateMenu = () => import(/* webpackChunkName: "template" */ '@/components/TemplateMenu.vue');
const Elements = () => import(/* webpackChunkName: "elements" */ '@/views/Elements.vue');

export default {
  name: 'Templates',
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
};
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';

.section {
  grid-template-columns: 200px 1fr 300px;
  grid-template-areas: "templatemenu elements elementeditor";
}

.element-editor {
  grid-area: elementeditor;
  height: 100%;
  padding: 1em 0.5em;
  border-left: $border-color $border-size $border-style;
}
</style>
