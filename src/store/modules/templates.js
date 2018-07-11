/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  templates: {},
  selectedTemplate: {},
};

const getters = {
  templates: state => state.templates,
  templateSet: (state, getters) => {
    if (isEmpty(state.templates)) {
      return [];
    }
    const templateIds = Object.keys(state.templates);
    const templateSet = [];
    templateIds.forEach((templateId) => {
      if (state.templates[templateId].projectId === getters.selectedProject.id) {
        templateSet.push(state.templates[templateId]);
      }
    });
    return templateSet;
  },
  selectedTemplate: state => state.selectedTemplate,
};

const mutations = {
  setTemplates(state, templates) {
    state.templates = templates;
  },
  selectTemplate(state, selectedTemplate) {
    state.selectedTemplate = selectedTemplate;
  },
  clearSelectedTemplate(state) {
    state.selectedTemplateId = {};
  },
};

const actions = {
  async updateTemplates({ commit }, templateDocs) {
    const templates = {};
    templateDocs.forEach((doc) => {
      templates[doc.id] = doc;
    });
    commit('setTemplates', templates);
  },
  async selectTemplate({ getters, commit }, selectedTemplate) {
    if (!isEmpty(selectedTemplate)) {
      commit('selectTemplate', selectedTemplate);
      if (!isEmpty(getters.selectedProject)) {
        getters.selectedProject.selectedTemplateId = selectedTemplate.id;
        try {
          await getters.selectedProject.save();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      commit('selectTemplate', {});
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
