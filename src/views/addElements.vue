<template>
  <div class="columns">
    <div class="column is-one-third">
      <h5 class="title is-5">
        {{ $t('chooseElement') | capitalize }}
      </h5>
      <form>
        <vue-form-generator v-if="model && schema"
          :schema="schema"
          :model="model"
          :options="formOptions"
          :tag="tag">
        </vue-form-generator>
      </form>
      <div class="buttons">
        <button class="button"
          @click="cancel">{{ $t('cancel') | capitalize }}</button>
        <button
          class="button is-success"
          :disabled="selectedElements.length < 1"
          @click="addSelectedElements">{{ $t('addElements') | capitalize }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters } from 'vuex';
import { capitalize, find, isEmpty } from 'lodash';

export default {
  name: 'AddElements',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  data() {
    return {
      model: {},
      schema: {},

      formOptions: {
        fieldIdPrefix: 'element-',
      },

      tag: 'div',
    };
  },
  mounted() {
    const generatedSchema = {
      fields: [],
    };
    const coreElementIds = Object.keys(this.coreElements);
    const generatedModel = {};
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
  },
  computed: {
    ...mapGetters([
      'db',
      'selectedTemplateId',
      'coreElements',
      'elementSet',
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
  },
  methods: {
    cancel() {
      // this.template.resync();
      // Go back to last page
      this.$router.go(-1);
    },
    addSelectedElements() {
      console.log('2DO: Handle added elements');
      this.selectedElements.forEach(async (coreElementId) => {
        const coreElement = this.coreElements[coreElementId];
        const element = {
          id: `${new Date().toJSON()}${coreElementId}`,
          coreElementId,
          name: coreElement.name,
          templateId: this.selectedTemplateId,
          createTime: new Date().toJSON(),
          values: coreElement.coreFields,
        };
        try {
          await this.db.elements.upsert(element);
        } catch (error) {
          console.log(error);
        }
      });
      this.$router.push({ name: 'elements' });
    },
    uniqueElementExistsAlready(coreElementId) {
      if (isEmpty(this.elementSet)) {
        return false;
      }
      const uniqueElement = find(this.elementSet, { coreElementId: parseInt(coreElementId, 10) });
      if (isEmpty(uniqueElement)) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
  .title {
    margin-bottom: 1em;
  }
  .column {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  form {
    overflow-y: auto;

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
  }

  .buttons {
    margin-top: 0.5em;
  }
</style>
