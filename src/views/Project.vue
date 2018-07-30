<template>
  <base-main>
    <h5 class="title is-5">
      {{ $t(`${action}Project`) | capitalize }}
    </h5>
    <form>
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
        :tag="tag"
        @validated="onValidated"
        data-qa="project-form">
      </vue-form-generator>
    </form>
    <base-buttons
      :cancelling="cancelling"
      :submitting="submitting"
      :disabled="!entriesAreValid"
      :action="action"
      element="project"
      v-on:cancel-action="cancel"
      v-on:perform-action="performAction"/>
  </base-main>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
import { mapGetters, mapActions } from 'vuex';
import baseButtonState from '@/mixins/baseButtonState';
import errorHandling from '@/mixins/errorHandling';

const BaseMain = () => import(/* webpackChunkName: "base" */ '@/components/BaseMain.vue');

export default {
  name: 'Project',
  mixins: [baseButtonState, errorHandling],
  components: {
    'vue-form-generator': VueFormGenerator.component,
    BaseMain,
  },
  props: {
    project: {
      type: Object,
      default: () => ({ name: '', description: '' }),
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
          placeholder: this.$lodash.capitalize(this.$t('projectName')),
          min: 3,
          validator: VueFormGenerator.validators.string,
          required: true,
        }, {
          type: 'textArea',
          label: this.$lodash.capitalize(this.$t('description')),
          model: 'description',
          id: 'description',
          placeholder: this.$lodash.capitalize(this.$t('projectDescription')),
        }],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'project-',
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
    ]),
    model() {
      return this.project;
    },
  },
  methods: {
    ...mapActions([
      'selectProject',
    ]),
    onValidated(isValid) {
      this.entriesAreValid = isValid;
    },
    cancel() {
      this.cancelling = true;
      if (!this.$lodash.isEmpty(this.project)) {
        this.project.resync();
      }
      this.cancelling = false;
      // Go back to last page
      this.$router.go(-1);
    },
    performAction() {
      this.submitting = true;
      if (this.action === 'create') {
        this.createAndSelectProject();
      } else if (this.action === 'edit') {
        this.updateProject();
      }
    },
    async createAndSelectProject() {
      const project = this.$lodash.cloneDeep(this.model);
      project.id = `${new Date().toJSON()}${this.model.name}`;
      project.createTime = new Date().toJSON();
      // project.authorId = this.selectedUserId;
      let projectDoc = {};
      try {
        projectDoc = await this.db.projects.upsert(project);
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      this.submitting = false;
      if (!this.$lodash.isEmpty(projectDoc)) {
        this.selectProject(projectDoc);
        // When creating a project, always go to the templates overview
        this.$router.push({ name: 'templates' });
      }
    },
    async updateProject() {
      try {
        await this.project.save();
      } catch (error) {
        this.addError({ message: error, class: 'is-danger' });
      }
      this.submitting = false;
      // Go back to last page
      this.$router.go(-1);
    },
  },
};
</script>
