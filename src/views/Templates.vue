<template>
  <section class="templates section">
    <aside
      id="templates-menu"
      class="menu">
      <p class="menu-label">
        {{ $t('collections') | capitalize }}
      </p>
      <ul v-if="selectedCollection" class="menu-list selected-collection-menu"
        :style="{ minHeight: menuHeight + 'px' }">
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
          @click="selectTemplate(template.id)">
          <a class="no-select" :class="{ 'is-active' : (template.id === selectedTemplateId) }">
            {{ template.name }}
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
        </li>
      </ul>
    </aside>
    <router-view id="template-settings" class="settings" :template="template"/>
    <div class="element-editor" v-show="editElement">
      <h5 class="title is-5">
        {{ $t('editElement') | capitalize }}
      </h5>
      <form>
        <vue-form-generator
          :schema="elementSchema"
          :model="elementModel"
          :options="elementFormOptions"
          :tag="tag"
          @validated="onValidated">
        </vue-form-generator>
      </form>
      <div class="buttons">
        <button class="button"
          @click="cancel">{{ $t('cancel') | capitalize }}</button>
        <button class="button is-success"
          :disabled="!entriesAreValid"
          @click="updateElement">
          {{ $t('updateElement') | capitalize }}
        </button>
      </div>
    </div>
    <div class="element-editor" v-show="removeElement">
      Remove element <br>
      {{ selectedElement.id }}
    </div>
  </section>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import Vue from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { capitalize, isEmpty } from 'lodash';

export default {
  name: 'Templates',
  props: ['template'],
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  data() {
    return {
      menuHeight: 0,

      entriesAreValid: true,
      elementModel: {},
      elementSchema: {},
      elementFormOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'element-',
      },

      tag: 'div',
    };
  },
  mounted() {
    VueFormGenerator.validators.resources.fieldIsRequired = capitalize(this.$t('fieldIsRequired'));
    VueFormGenerator.validators.resources.textTooSmall = capitalize(this.$t('textTooSmall'));
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
    ]),
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
