/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  coreElements: {
    1: {
      id: 1,
      name: 'emailHeader',
      component: 'CerberusEmailHeader',
      allowedOnce: true,
      coreFields: [{
        name: 'image_link',
        type: 'text',
        tag: 'input',
        value: 'http://placehold.it/200x50',
        placeholder: 'Add link to image here',
        label: 'imageLink',
      }, {
        name: 'image_link_alt',
        type: 'text',
        tag: 'input',
        value: 'alt_text',
        placeholder: 'Add alternative text here',
        label: 'imageAltText',
      }],
    },
    2: {
      id: 2,
      name: 'heroImage',
      component: 'CerberusHeroImage',
      coreFields: [{
        type: 'text',
        tag: 'input',
        value: 'http://placehold.it/1200x600',
        placeholder: 'Add link to image here',
      }],
    },
    3: {
      id: 3,
      name: 'oneColumnTextButton',
      component: 'CerberusOneColumnTextButton',
      coreFields: [],
    },
    4: {
      id: 4,
      name: 'backgroundImageText',
      component: 'CerberusBackgroundImageText',
      coreFields: [],
    },
    5: {
      id: 5,
      name: 'twoEvenColumns',
      component: 'CerberusTwoEvenColumns',
      coreFields: [],
    },
    6: {
      id: 6,
      name: 'threeEvenColumns',
      component: 'CerberusThreeEvenColumns',
      coreFields: [],
    },
    7: {
      id: 7,
      name: 'thumbmailLeftTextRight',
      component: 'CerberusThumbnailLeftTextRight',
      coreFields: [],
    },
    8: {
      id: 8,
      name: 'thumbnailRightTextLeft',
      component: 'CerberusThumbnailRightTextLeft',
      coreFields: [],
    },
    9: {
      id: 9,
      name: 'clearSpacer',
      component: 'CerberusClearSpacer',
      coreFields: [],
    },
    10: {
      id: 10,
      name: 'oneColumnText',
      component: 'CerberusOneColumnText',
      coreFields: [],
    },
    11: {
      id: 11,
      name: 'emailFooter',
      component: 'CerberusEmailFooter',
      allowedOnce: true,
      coreFields: [],
    },
    12: {
      id: 12,
      name: 'emailBleedBackground',
      component: 'CerberusEmailBleedBackground',
      allowedOnce: true,
      coreFields: [],
    },
  },
  elements: {},
  // selectedTemplateId: '',
};

const getters = {
  coreElements: state => state.coreElements,
  elements: state => state.elements,
  elementSet: (state, getters) => {
    if (isEmpty(state.elements)) {
      return [];
    }
    const elementIds = Object.keys(state.elements);
    const elementSet = [];
    elementIds.forEach((elementId) => {
      if (state.elements[elementId].templateId === getters.selectedTemplateId) {
        elementSet.push(state.elements[elementId]);
      }
    });
    return elementSet;
  },
  /* selectedTemplateId: state => state.selectedTemplateId,
  selectedTemplate: state => (state.selectedTemplateId === '' ? false :
    state.templates[state.selectedTemplateId]), */
};

const mutations = {
  setElements(state, elements) {
    state.elements = elements;
  },
  /* selectTemplate(state, selectedTemplateId) {
    state.selectedTemplateId = selectedTemplateId;
  },
  clearSelectedTemplate(state) {
    state.selectedTemplateId = '';
  }, */
};

const actions = {
  async updateElements({ commit }, elementDocs) {
    const elements = {};
    elementDocs.forEach((doc) => {
      elements[doc.id] = doc;
    });
    commit('setElements', elements);
  },
  /* async selectTemplate({ getters, commit }, selectedTemplateId) {
    commit('selectTemplate', selectedTemplateId);
    if (getters.selectedCollection !== false) {
      getters.selectedCollection.selectedTemplateId = selectedTemplateId;
      try {
        await getters.selectedCollection.save();
      } catch (error) {
        console.log(error);
      }
    }
  }, */
};

export default {
  state,
  getters,
  mutations,
  actions,
};
