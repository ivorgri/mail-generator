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
        list: 'A list item.|Another list item here.|Everyone gets a list item, list items for everyone!',
        buttonLink: 'https://www.google.com',
        buttonText: 'Centered Primary Button',
        buttonTextColor: '#ffffff',
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
          type: 'textArea',
          label: 'list',
          model: 'list',
          placeholder: 'Add list items here. Split items using "|"',
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
          label: 'buttonTextColor',
          model: 'buttonTextColor',
          placeholder: 'Add button text color',
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
      model: {
        imageLink: 'http://placehold.it/600x230/222222/666666',
        content: 'Content',
        textColor: '#ffffff',
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
          label: 'textColor',
          model: 'textColor',
          placeholder: 'Set text color',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'Add content here',
        }],
      },
    },
    5: {
      id: 5,
      name: 'twoEvenColumns',
      model: {
        imageLink: 'http://placehold.it/270',
        imageLink2: 'http://placehold.it/270',
        imageAltText: 'alt_text',
        imageAltText2: 'alt_text',
        content: 'Content',
        content2: 'Content',
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
          label: 'imageLink',
          model: 'imageLink2',
          placeholder: 'Add link to image here',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'Add content here',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content2',
          placeholder: 'Add content here',
        }],
      },
    },
    6: {
      id: 6,
      name: 'threeEvenColumns',
      coreFields: [],
    },
    7: {
      id: 7,
      name: 'thumbnailLeftTextRight',
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
      if (state.elements[elementId].templateId === getters.selectedTemplate.id) {
        const { coreElementId } = state.elements[elementId];
        if (coreElementId !== 1 && coreElementId !== 11 && coreElementId !== 12) {
          elementSet.push(state.elements[elementId]);
        }
      }
    });
    return elementSet;
  },
  elementById: (state, getters) => (coreElementId) => {
    let element = {};
    const elementIds = Object.keys(state.elements);
    elementIds.forEach((elementId) => {
      if (state.elements[elementId].templateId === getters.selectedTemplate.id) {
        if (state.elements[elementId].coreElementId === coreElementId) {
          element = state.elements[elementId];
        }
      }
    });
    return element;
  },
  elementsExist: (state, getters) => !isEmpty(getters.elementSet) ||
      !isEmpty(getters.elementById(1)) ||
      !isEmpty(getters.elementById(11)) ||
      !isEmpty(getters.elementById(12)),
  selectedElement: state => state.selectedElement,
};

const mutations = {
  setElements(state, elements) {
    state.elements = elements;
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
