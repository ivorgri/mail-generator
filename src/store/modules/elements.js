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
        textColor: '#555555',
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
        imageAltText: 'alt_text',
        backgroundColor: '#ffffff',
        textColor: '#555555',
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
        }, {
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'Add background color here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'Set text color',
        }],
      },
    },
    3: {
      id: 3,
      name: 'oneColumnTextButton',
      model: {
        backgroundColor: '#ffffff',
        textColor: '#555555',
        title: 'Title',
        content: 'Content',
        buttonLink: 'https://www.google.com',
        buttonText: 'Centered Primary Button',
        buttonColor: '#222222',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'Add background color here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'Set text color',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'title',
          model: 'title',
          placeholder: 'Set title',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'Add content here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonLink',
          model: 'buttonLink',
          placeholder: 'Add link to button here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonText',
          model: 'buttonText',
          placeholder: 'Add button text',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonColor',
          model: 'buttonColor',
          placeholder: 'Add button color',
        }],
      },
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
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'Set text color',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'webversionColor',
          model: 'webversionColor',
          placeholder: 'Set webversion text color',
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
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'Add content here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'Set background color',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'Set text color',
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
        if(elementId !== 1 || elementId !== 11 || elementId !== 12) {
          elementSet.push(state.elements[elementId]);
        }
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
  clearSelectedElement(state) {
    state.selectedElement = {};
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
