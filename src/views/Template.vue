<template>
  <base-main>
    <h5 class="title is-5">
      {{ $t(`${action}Template`) | capitalize }}
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
      :cancelling="cancelling"
      :submitting="submitting"
      :disabled="!entriesAreValid"
      :action="action"
      element="template"
      v-on:cancel-action="cancel"
      v-on:perform-action="performAction"/>
  </base-main>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters, mapActions } from 'vuex';
import baseButtonState from '@/mixins/baseButtonState';

const BaseMain = () => import(/* webpackChunkName: "base" */ '@/components/BaseMain.vue');

export default {
  name: 'Template',
  mixins: [baseButtonState],
  components: {
    'vue-form-generator': VueFormGenerator.component,
    BaseMain,
  },
  props: {
    template: {
      type: Object,
      default: () => ({
        name: '',
        description: '',
        backgroundColor: '#222222',
        inboxPreview: '',
      }),
    },
    action: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      entriesAreValid: true,
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: this.$lodash.capitalize(this.$t('name')),
          model: 'name',
          id: 'name',
          placeholder: this.$lodash.capitalize(this.$t('templateName')),
          min: 3,
          validator: VueFormGenerator.validators.string,
          required: true,
        }, {
          type: 'textArea',
          label: this.$lodash.capitalize(this.$t('description')),
          model: 'description',
          id: 'description',
          placeholder: this.$lodash.capitalize(this.$t('templateDescription')),
        }, {
          type: 'input',
          inputType: 'text',
          label: this.$lodash.capitalize(this.$t('emailTitle')),
          model: 'emailTitle',
          id: 'emailTitle',
          placeholder: this.$lodash.capitalize(this.$t('emailTitlePlaceholder')),
        }, {
          type: 'input',
          inputType: 'text',
          label: this.$lodash.capitalize(this.$t('color')),
          model: 'backgroundColor',
          id: 'backgroundColor',
          placeholder: this.$lodash.capitalize(this.$t('templateColor')),
        }, {
          type: 'textArea',
          label: this.$lodash.capitalize(this.$t('inboxPreview')),
          model: 'inboxPreview',
          id: 'inboxPreview',
          placeholder: this.$t('inboxPreviewPlaceholder'),
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
    VueFormGenerator.validators.resources.fieldIsRequired = this.$lodash.capitalize(this.$t('fieldIsRequired'));
    VueFormGenerator.validators.resources.textTooSmall = this.$lodash.capitalize(this.$t('textTooSmall'));
  },
  computed: {
    ...mapGetters([
      'db',
      'selectedProject',
    ]),
    model() {
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
      if (this.action === 'create') {
        this.createAndSelectTemplate();
      } else if (this.action === 'edit') {
        this.updateTemplate();
      }
    },
    async createAndSelectTemplate() {
      const template = this.$lodash.cloneDeep(this.model);
      template.id = `${new Date().toJSON()}${this.model.name}`;
      template.createTime = new Date().toJSON();
      template.projectId = this.selectedProject.id;
      let templateDoc = {};
      try {
        templateDoc = await this.db.templates.upsert(template);
      } catch (error) {
        console.log(error);
      }
      this.selectTemplate(templateDoc);
      this.submitting = false;
      this.$router.push({ name: 'templates' });
    },
    async updateTemplate() {
      try {
        await this.template.save();
      } catch (error) {
        console.log(error);
      }
      this.submitting = false;
      this.$router.push({ name: 'templates' });
    },
  },
};
</script>
