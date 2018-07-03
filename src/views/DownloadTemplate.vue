<template>
  <base-main>
    <h5 class="title is-5">
      {{ $t(`downloadTemplate`) | capitalize }}
    </h5>
    <form>
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
        :tag="tag"
        @validated="onValidated"
        data-qa="download-template-form">
      </vue-form-generator>
    </form>
    <a v-if="filename !== ''"
      :download="filename"
      :href="htmlFile"
      ref="downloadTemplateButton"
      data-qa="download-template-link">Download</a>
    <base-buttons
      :cancelling="cancelling"
      :submitting="submitting"
      :disabled="false"
      v-on:cancel-action="cancel"
      v-on:perform-action="performAction"/>
  </base-main>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters, mapActions } from 'vuex';
import { capitalize } from 'lodash';
import baseButtonState from '@/mixins/baseButtonState';
import generateHtmlBody from '@/mixins/generateHtmlBody';

const BaseMain = () => import(/* webpackChunkName: "base" */ '@/components/BaseMain.vue');

export default {
  name: 'DownloadTemplate',
  mixins: [baseButtonState, generateHtmlBody],
  components: {
    'vue-form-generator': VueFormGenerator.component,
    BaseMain,
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
          label: capitalize(this.$t('fileName')),
          model: 'filename',
          id: 'filename',
          placeholder: capitalize(this.$t('fillInFilename')),
          min: 1,
          validator: VueFormGenerator.validators.string,
          required: true,
        }],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'download-',
      },

      model: {},

      tag: 'div',
      htmlFile: null,
    };
  },
  mounted() {
    VueFormGenerator.validators.resources.fieldIsRequired = capitalize(this.$t('fieldIsRequired'));
    VueFormGenerator.validators.resources.textTooSmall = capitalize(this.$t('textTooSmall'));
    this.$set(this.model, 'filename', this.template.name);

    const htmlObjectUrl = new Blob([this.htmlBody], { type: 'text/html' });
    this.htmlFile = window.URL.createObjectURL(htmlObjectUrl);
  },
  computed: {
    ...mapGetters([
      'db',
      'selectedCollectionId',
      'selectedCollection',
      'interfaceAction',
    ]),
    filename() {
      return `${this.model.filename}.html`;
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
      window.URL.revokeObjectURL(this.htmlFile);
      this.cancelling = false;
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      this.submitting = true;
      // Because we can't directly trigger a download, we fake a click here
      const elem = this.$refs.downloadTemplateButton;
      elem.click();
      window.URL.revokeObjectURL(this.htmlFile);
      this.submitting = false;
      // Go back to last page
      this.$router.go(-1);
    },
  },
};
</script>
