<template>
  <div>
    <h5 class="title is-5">
      {{ $t('editElement') | capitalize }}
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
import { mapGetters, mapMutations } from 'vuex';
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
    schema() {
      return this.coreElements[this.elementToEdit.coreElementId].schema;
    },
    ...mapGetters([
      'coreElements',
    ]),
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
  },
};
</script>
