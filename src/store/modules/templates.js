/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  templates: {},
  selectedTemplateId: '',
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
      if (state.templates[templateId].collectionId === getters.selectedCollectionId) {
        templateSet.push(state.templates[templateId]);
      }
    });
    return templateSet;
  },
  selectedTemplateId: state => state.selectedTemplateId,
  selectedTemplate: state => (state.selectedTemplateId === '' ? false :
    state.templates[state.selectedTemplateId]),
};

const mutations = {
  setTemplates(state, templates) {
    state.templates = templates;
  },
  selectTemplate(state, selectedTemplateId) {
    state.selectedTemplateId = selectedTemplateId;
  },
  clearSelectedTemplate(state) {
    state.selectedTemplateId = '';
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
  async selectTemplate({ getters, commit }, selectedTemplateId) {
    commit('selectTemplate', selectedTemplateId);
    if (getters.selectedCollection !== false) {
      getters.selectedCollection.selectedTemplateId = selectedTemplateId;
      try {
        await getters.selectedCollection.save();
      } catch (error) {
        console.log(error);
      }
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
