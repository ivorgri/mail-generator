/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  coreElements: {
    1: {
      id: 1,
      name: 'emailHeader',
      model: {
        imageLink: 'http://placehold.it/200x50',
        imageAltText: 'alt_text',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'imageLink',
          model: 'imageLink',
          placeholder: 'Add link to image here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'Add alternative text here',
        }],
      },
    },
    2: {
      id: 2,
      name: 'heroImage',
      model: {
        imageLink: 'http://placehold.it/1200x600',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'imageLink',
          model: 'imageLink',
          placeholder: 'Add link to image here',
        }],
      },
    },
    3: {
      id: 3,
      name: 'oneColumnTextButton',
      coreFields: [],
    },
    4: {
      id: 4,
      name: 'backgroundImageText',
      coreFields: [],
    },
    5: {
      id: 5,
      name: 'twoEvenColumns',
      coreFields: [],
    },
    6: {
      id: 6,
      name: 'threeEvenColumns',
      coreFields: [],
    },
    7: {
      id: 7,
      name: 'thumbmailLeftTextRight',
      coreFields: [],
    },
    8: {
      id: 8,
      name: 'thumbnailRightTextLeft',
      coreFields: [],
    },
    9: {
      id: 9,
      name: 'clearSpacer',
      coreFields: [],
    },
    10: {
      id: 10,
      name: 'oneColumnText',
      coreFields: [],
    },
    11: {
      id: 11,
      name: 'emailFooter',
      model: {
        textColor: '#888888',
        webversionColor: '#cccccc',
      },
      schema: {
        fields: [{
          name: 'textColor',
          type: 'text',
          tag: 'input',
          value: '#888888',
          placeholder: 'Set text color',
          label: 'textColor',
        }, {
          name: 'webversioncolor',
          type: 'text',
          tag: 'input',
          value: '#cccccc',
          placeholder: 'Set webversion text color',
          label: 'webversionColor',
        }],
      },
    },
    12: {
      id: 12,
      name: 'emailBleedBackground',
      model: {
        content: 'Content',
        backgroundColor: '#709f2b',
        textColor: '#ffffff',
      },
      schema: {
        fields: [{
          name: 'content',
          type: 'text',
          tag: 'textarea',
          value: 'Content',
          placeholder: 'Add content here',
          label: 'content',
        }, {
          name: 'backgroundColor',
          type: 'text',
          tag: 'input',
          value: '#709f2b',
          placeholder: 'Set background color',
          label: 'backgroundColor',
        }, {
          name: 'textColor',
          type: 'text',
          tag: 'input',
          value: '#ffffff',
          placeholder: 'Set text color',
          label: 'textColor',
        }],
      },
    },
  },
  elements: {},
  selectedElement: {},
  editElement: false,
  removeElement: false,
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
  selectedElement: state => state.selectedElement,
  editElement: state => state.editElement,
  removeElement: state => state.removeElement,
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
  toggleEditElement(state, show) {
    state.removeElement = false;
    if (show === undefined) {
      state.editElement = !state.editElement;
    }
    state.editElement = show;
  },
  toggleRemoveElement(state, show) {
    state.editElement = false;
    if (show === undefined) {
      state.removeElement = !state.removeElement;
    }
    state.removeElement = show;
  },
  setSelectedElement(state, element) {
    state.selectedElement = element;
  },
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
