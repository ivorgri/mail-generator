<template>
  <div>
    <h5 class="title is-5">
      {{ $t(`${action}Element`) | capitalize }}
    </h5>
    <form>
      <vue-form-generator v-if="model && schema"
        :schema="schema"
        :model="model"
        :options="formOptions"
        :tag="tag"
        @validated="onValidated"
        data-qa="element-form">
      </vue-form-generator>
    </form>
    <base-buttons
      :cancelling="cancelling"
      :submitting="submitting"
      :action="action"
      element="elements"
      :disabled="disabledAction"
      v-on:cancel-action="cancel"
      v-on:perform-action="performAction"/>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters } from 'vuex';
import { capitalize, isEmpty } from 'lodash';
import baseButtonState from '@/mixins/baseButtonState';

export default {
  name: 'Element',
  mixins: [baseButtonState],
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  props: {
    element: {
      type: Object,
    },
    action: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      entriesAreValid: true,
      model: {},
      schema: {},

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'element-',
      },

      tag: 'div',
    };
  },
  mounted() {
    VueFormGenerator.validators.resources.numberTooSmall = this.$lodash.capitalize(this.$t('numberTooSmall'));

    if (this.action === 'edit') {
      const currentSchemaFields = this.coreElements[this.element.coreElementId].schema.fields;
      const generatedSchema = {
        fields: [],
      };
      currentSchemaFields.forEach((field, index) => {
        const newField = field;
        newField.label = this.$lodash.capitalize(this.$t(field.label));
        newField.placeholder = this.$lodash.capitalize(this.$t(field.placeholder));
        generatedSchema.fields[index] = newField;
      });
      this.schema = generatedSchema;
      this.model = this.element.model;
    } else {
      const generatedSchema = {
        fields: [],
      };
      const generatedModel = {};
      const coreElementIds = Object.keys(this.coreElements);
      coreElementIds.forEach((coreElementId) => {
        let disabled = false;
        const intCoreElementId = parseInt(coreElementId, 10);
        if (intCoreElementId === 1 || intCoreElementId === 11 || intCoreElementId === 12) {
          disabled = this.uniqueElementExistsAlready(intCoreElementId);
        }
        const field = {
          type: 'checkbox',
          label: capitalize(this.$t(this.coreElements[coreElementId].name)),
          model: coreElementId,
          default: false,
          disabled,
        };
        generatedSchema.fields.push(field);
        generatedModel[coreElementId] = false;
      });
      this.model = generatedModel;
      this.schema = generatedSchema;
    }
  },
  computed: {
    ...mapGetters([
      'db',
      'selectedTemplate',
      'coreElements',
      'elementById',
    ]),
    selectedElements() {
      const modelKeys = Object.keys(this.model);
      const selectedElements = [];
      modelKeys.forEach((modelKey) => {
        if (this.model[modelKey]) {
          selectedElements.push(parseInt(modelKey, 10));
        }
      });
      return selectedElements;
    },
    disabledAction() {
      return (this.action === 'add') ? this.selectedElements.length < 1 : !this.entriesAreValid;
    },
  },
  methods: {
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.cancelling = true;
      this.cancelling = false;
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      this.submitting = true;
      if (this.action === 'add') {
        this.addSelectedElements();
      } else if (this.action === 'edit') {
        this.updateElement();
      }
    },
    async addSelectedElements() {
      this.submitting = true;
      this.selectedElements.forEach(async (coreElementId) => {
        const coreElement = this.coreElements[coreElementId];
        const element = {
          id: `${new Date().toJSON()}${coreElementId}`,
          coreElementId,
          name: coreElement.name,
          templateId: this.selectedTemplate.id,
          createTime: new Date().toJSON(),
          model: coreElement.model,
        };
        try {
          await this.db.elements.upsert(element);
        } catch (error) {
          console.log(error);
        }
      });
      this.submitting = false;
      // this.$router.push({ name: 'templates' });
      this.$router.go(-1);
    },
    async updateElement() {
      try {
        await this.element.save();
      } catch (error) {
        console.log(error);
      }
      this.submitting = false;
      this.$router.push({ name: 'templates' });
    },
    uniqueElementExistsAlready(coreElementId) {
      const uniqueElement = this.elementById(parseInt(coreElementId, 10));
      if (isEmpty(uniqueElement)) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
  .vue-form-generator .field-checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;

    .field-wrap {
      order: 0;
    }

    label {
      order: 1;
      margin-left: 0.5em;
    }
  }
</style>
