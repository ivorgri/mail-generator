<template>
  <div class="box">
    <div class="columns">
      <div class="column is-one-third">
        <h5 v-if="!this.template" class="title is-5">
          {{ $t('createTemplate') | capitalize }}
        </h5>
        <h5 v-if="this.template"
          class="title is-5">
          {{ $t('updateTemplate') | capitalize }}
        </h5>
        <form>
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
            :tag="tag"
            @validated="onValidated">
          </vue-form-generator>
        </form>
        <div class="buttons">
          <button class="button"
            @click="cancel">{{ $t('cancel') | capitalize }}</button>
          <button v-if="!this.template"
            class="button is-success"
            :disabled="!entriesAreValid"
            @click="createAndSelectTemplate">
              {{ $t('saveAndOpenTemplate') | capitalize }}
          </button>
          <button v-if="this.template"
            class="button is-success"
            :disabled="!entriesAreValid"
            @click="updateTemplate">{{ $t('updateTemplate') | capitalize }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import { mapGetters, mapActions } from 'vuex';
import { capitalize, isEmpty, cloneDeep } from 'lodash';

export default {
  name: 'Template',
  components: {
    'vue-form-generator': VueFormGenerator.component,
  },
  props: ['template'],
  data() {
    return {
      entriesAreValid: true,
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: capitalize(this.$t('name')),
          model: 'name',
          id: 'name',
          placeholder: capitalize(this.$t('templateName')),
          min: 3,
          validator: VueFormGenerator.validators.string,
          required: true,
        }, {
          type: 'textArea',
          label: capitalize(this.$t('description')),
          model: 'description',
          id: 'description',
          placeholder: capitalize(this.$t('templateDescription')),
        }, {
          type: 'input',
          inputType: 'text',
          label: capitalize(this.$t('color')),
          model: 'color',
          id: 'color',
          placeholder: capitalize(this.$t('templateColor')),
        }],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'template-',
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
      'db',
      'selectedCollectionId',
      'selectedCollection',
    ]),
    model() {
      if (isEmpty(this.template)) {
        return {
          name: '',
          description: '',
          color: '',
        };
      }
      return this.template;
    },
  },
  methods: {
    ...mapActions([
      'selectTemplate',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.template.resync();
      // Go back to last page
      this.$router.go(-1);
    },
    async createAndSelectTemplate() {
      const template = cloneDeep(this.model);
      template.id = `${new Date().toJSON()}${this.model.name}`;
      template.createTime = new Date().toJSON();
      template.collectionId = this.selectedCollectionId;
      try {
        await this.db.templates.upsert(template);
      } catch (error) {
        console.log(error);
      }
      this.selectTemplate(template.id);
      this.$router.push({ name: 'templates' });
    },
    async updateTemplate() {
      try {
        await this.template.save();
      } catch (error) {
        console.log(error);
      }
      this.$router.push({ name: 'templates' });
    },
  },
};
</script>
