<template>
  <div>
    <h5 class="title is-5">
      {{ $t('editElement') | capitalize }}
    </h5>
    <!-- <form>
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
        :tag="tag"
        @validated="onValidated">
      </vue-form-generator>
    </form> -->
    <base-buttons
      :cancelling="cancelling"
      :submitting="submitting"
      :disabled="!entriesAreValid"
      v-on:cancel-action="cancel"
      v-on:perform-action="performAction"/>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapMutations } from 'vuex';
import { isEmpty, capitalize } from 'lodash';
import baseButtonState from '@/mixins/baseButtonState';

export default {
  name: 'EditElement',
  mixins: [baseButtonState],
  components: {
    'vue-form-generator': VueFormGenerator.component,
    baseButtonState,
  },
  props: {
    elementToEdit: {
      type: Object,
    },
  },
  data() {
    return {
      entriesAreValid: true,
      /* schema: {
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
      }, */

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'edit-element-',
      },

      tag: 'div',
    };
  },
  mounted() {
    VueFormGenerator.validators.resources.fieldIsRequired = capitalize(this.$t('fieldIsRequired'));
    VueFormGenerator.validators.resources.textTooSmall = capitalize(this.$t('textTooSmall'));
  },
  computed: {
    model() {
      return this.elementToEdit.model;
    },
    /* ...mapGetters([
      'db',
      'selectedCollectionId',
      'selectedCollection',
    ]),
    */
  },
  methods: {
    ...mapMutations([
      'setAction',
      'setElement',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.cancelling = true;
      if (!isEmpty(this.elementToEdit)) {
        this.elementToEdit.resync();
      }
      this.setAction('');
      this.setElement('');
      this.cancelling = false;
      this.$router.push({ name: 'templates' });
    },
    performAction() {
      this.submitting = true;
      this.updateElement();
    },
    async updateElement() {
      try {
        await this.elementToEdit.save();
      } catch (error) {
        console.log(error);
      }
      this.setAction('');
      this.setElement('');
      this.submitting = false;
      this.$router.push({ name: 'templates' });
    },
    /*

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
     */
  },
};
</script>
