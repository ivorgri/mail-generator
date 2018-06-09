<template>
  <base-main>
    <h5 class="title is-5">
      {{ $t(`${interfaceAction}Template`) | capitalize }}
    </h5>
    <form>
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
        :tag="tag"
        @validated="onValidated"
        data-qa="template-form">
      </vue-form-generator>
    </form>
    <base-buttons
      :disabled="!entriesAreValid"
      v-on:cancel-action="cancel"
      v-on:perform-action="performAction"/>
  </base-main>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters, mapActions } from 'vuex';
import { capitalize, isEmpty, cloneDeep } from 'lodash';

const BaseMain = () => import(/* webpackChunkName: "base" */ '@/components/BaseMain.vue');
const BaseButtons = () => import(/* webpackChunkName: "base" */ '@/components/BaseButtons.vue');

export default {
  name: 'Template',
  components: {
    'vue-form-generator': VueFormGenerator.component,
    BaseMain,
    BaseButtons,
  },
  props: {
    template: {
      type: Object,
    },
  },
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
          model: 'backgroundColor',
          id: 'backgroundColor',
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
      'interfaceAction'
    ]),
    model() {
      if (isEmpty(this.template)) {
        return {
          name: '',
          description: '',
          backgroundColor: '#222222',
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
      if (!isEmpty(this.template)) {
        this.template.resync();
      }
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      if (this.interfaceAction === 'create') {
        this.createAndSelectTemplate();
      } else if (this.interfaceAction === 'edit') {
        this.updateTemplate();
      }
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
