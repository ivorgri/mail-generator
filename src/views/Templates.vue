<template>
  <base-layout>
    <template slot="aside">
      <p class="menu-label">
        {{ $t('collections') | capitalize }}
      </p>
      <ul v-if="selectedCollection" class="menu-list selected-collection-menu"
        :style="{ minHeight: menuHeight + 'px' }" data-qa="selected-collection-menu-item">
        <li id="selected-collection" ref="selectedCollection">
          <router-link to="/collections"
            class="is-active">
            <span id="back-icon"
              class="icon is-small">
              <i class="fas fa-angle-left" aria-hidden="true"></i>
            </span>
            {{ selectedCollection.name }}
          </router-link>
        </li>
      </ul>
      <p class="menu-label no-select">
        {{ $t('templates') | capitalize }}
      </p>
      <ul class="menu-list">
        <li v-if="templateSet.length === 0" class="no-select">
          {{ $t('noTemplates') | capitalize }}
        </li>
        <li v-else
          v-for="template in templateSet"
          :key="template.id"
          @click="selectTemplate(template.id)"
          data-qa="template-items">
          <a class="no-select" :class="{ 'is-active' : (template.id === selectedTemplateId) }">
            {{ template.name }}
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
        </li>
      </ul>
    </template>
    <templateForm
      v-if="(interfaceAction === 'create'
        || interfaceAction === 'edit')
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
    </template>
  </base-layout>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { isEmpty } from 'lodash';

const BaseLayout = () => import(/* webpackChunkName: "base" */ '@/components/BaseLayout.vue');
const TemplateForm = () => import(/* webpackChunkName: "template" */ '@/views/Template.vue');
const AddElements = () => import(/* webpackChunkName: "elements" */ '@/views/AddElements.vue');
const Elements = () => import(/* webpackChunkName: "elements" */ '@/views/Elements.vue');
const EditElement = () => import(/* webpackChunkName: "elements" */ '@/views/EditElement.vue');

export default {
  name: 'Templates',
  props: {
    template: {
      type: Object,
    },
  },
  components: {
    BaseLayout,
    TemplateForm,
    AddElements,
    Elements,
    EditElement,
  },
  data() {
    return {
      menuHeight: 0,
    };
  },
  computed: {
    ...mapGetters([
      'selectedCollection',
      'templateSet',
      'selectedTemplateId',
      'editElement',
      'removeElement',
      'selectedElement',
      'coreElements',
      'interfaceAction',
      'interfaceElement',
      'elementSet',
      'selectedElement',
      'elementById',
    ]),
    elementsExist() {
      return !isEmpty(this.elementSet) ||
        !isEmpty(this.elementById(1)) ||
        !isEmpty(this.elementById(11)) ||
        !isEmpty(this.elementById(12));
    },
  },
  watch: {
    selectedCollection(newVal) {
      if (newVal !== false) {
        Vue.nextTick(() => {
          this.menuHeight = this.$refs.selectedCollection.clientHeight;
        });
      }
    },
    selectedElement(newVal) {
      if (!isEmpty(newVal)) {
        this.elementSchema = this.coreElements[newVal.coreElementId].schema;
        this.elementModel = this.selectedElement.model;
      }
    },
  },
  methods: {
    ...mapMutations([
      'toggleEditElement',
      'clearSelectedElement',
    ]),
    ...mapActions([
      'selectTemplate',
    ]),
    onValidated() {
      // console.log('Do something on validate');
    },
    cancel() {
      this.selectedElement.resync();
      this.clearSelectedElement();
      this.toggleEditElement(false);
    },
    async updateElement() {
      try {
        await this.selectedElement.save();
      } catch (error) {
        console.log(error);
      }
      this.clearSelectedElement();
      this.toggleEditElement(false);
    },
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
