/* eslint-disable no-param-reassign, no-shadow */

import VueFormGenerator from 'vue-form-generator';
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
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'imageAltTextPlaceholder',
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
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'imageAltTextPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'backgroundColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
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
          placeholder: 'backgroundColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'title',
          model: 'title',
          placeholder: 'titlePlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
        }, {
          type: 'textArea',
          label: 'list',
          model: 'list',
          placeholder: 'listPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonLink',
          model: 'buttonLink',
          placeholder: 'buttonLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonText',
          model: 'buttonText',
          placeholder: 'buttonTextPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonTextColor',
          model: 'buttonTextColor',
          placeholder: 'buttonTextColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonColor',
          model: 'buttonColor',
          placeholder: 'buttonColorPlaceholder',
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
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
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
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'imageAltTextPlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageLink2',
          model: 'imageLink2',
          placeholder: 'imageLink2Placeholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText2',
          model: 'imageAltText2',
          placeholder: 'imageAltText2Placeholder',
        }, {
          type: 'textArea',
          label: 'content2',
          model: 'content2',
          placeholder: 'content2Placeholder',
        }],
      },
    },
    6: {
      id: 6,
      name: 'threeEvenColumns',
      model: {
        imageLink: 'http://placehold.it/170',
        imageAltText: 'alt_text',
        content: 'Content',
        imageLink2: 'http://placehold.it/170',
        imageAltText2: 'alt_text',
        content2: 'Content',
        imageLink3: 'http://placehold.it/170',
        imageAltText3: 'alt_text',
        content3: 'Content',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'imageLink',
          model: 'imageLink',
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'imageAltTextPlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageLink2',
          model: 'imageLink2',
          placeholder: 'imageLink2Placeholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText2',
          model: 'imageAltText2',
          placeholder: 'imageAltText2Placeholder',
        }, {
          type: 'textArea',
          label: 'content2',
          model: 'content2',
          placeholder: 'content2Placeholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageLink3',
          model: 'imageLink3',
          placeholder: 'Add link to image here',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText3',
          model: 'imageAltText3',
          placeholder: 'imageAltText3Placeholder',
        }, {
          type: 'textArea',
          label: 'content3',
          model: 'content3',
          placeholder: 'content3Placeholder',
        }],
      },
    },
    7: {
      id: 7,
      name: 'thumbnailLeftTextRight',
      model: {
        imageLink: 'http://placehold.it/170',
        imageAltText: 'alt_text',
        backgroundColor: '#ffffff',
        textColor: '#555555',
        title: 'Title',
        content: 'Content',
        buttonLink: 'https://www.google.com',
        buttonText: 'Primary Button',
        buttonTextColor: '#ffffff',
        buttonColor: '#222222',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'imageLink',
          model: 'imageLink',
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'imageAltTextPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'backgroundColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'title',
          model: 'title',
          placeholder: 'titlePlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonLink',
          model: 'buttonLink',
          placeholder: 'buttonLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonText',
          model: 'buttonText',
          placeholder: 'buttonTextPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonTextColor',
          model: 'buttonTextColor',
          placeholder: 'buttonTextColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonColor',
          model: 'buttonColor',
          placeholder: 'buttonColorPlaceholder',
        }],
      },
    },
    8: {
      id: 8,
      name: 'thumbnailRightTextLeft',
      model: {
        imageLink: 'http://placehold.it/170',
        imageAltText: 'alt_text',
        backgroundColor: '#ffffff',
        textColor: '#555555',
        title: 'Title',
        content: 'Content',
        buttonLink: 'https://www.google.com',
        buttonText: 'Primary Button',
        buttonTextColor: '#ffffff',
        buttonColor: '#222222',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'imageLink',
          model: 'imageLink',
          placeholder: 'imageLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'imageAltText',
          model: 'imageAltText',
          placeholder: 'imageAltTextPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'backgroundColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'title',
          model: 'title',
          placeholder: 'titlePlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonLink',
          model: 'buttonLink',
          placeholder: 'buttonLinkPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonText',
          model: 'buttonText',
          placeholder: 'buttonTextPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonTextColor',
          model: 'buttonTextColor',
          placeholder: 'buttonTextColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'buttonColor',
          model: 'buttonColor',
          placeholder: 'buttonColorPlaceholder',
        }],
      },
    },
    9: {
      id: 9,
      name: 'clearSpacer',
      model: {
        height: 40,
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'number',
          label: 'height',
          model: 'height',
          min: 20,
          validator: VueFormGenerator.validators.integer,
        }],
      },
    },
    10: {
      id: 10,
      name: 'oneColumnText',
      model: {
        textColor: '#555555',
        content: 'Content',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'textArea',
          label: 'content',
          model: 'content',
          placeholder: 'contentPlaceholder',
        }],
      },
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
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'webversionColor',
          model: 'webversionColor',
          placeholder: 'webversionColorPlaceholder',
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
          placeholder: 'contentPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'backgroundColor',
          model: 'backgroundColor',
          placeholder: 'backgroundColorPlaceholder',
        }, {
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }],
      },
    },
    13: {
      id: 13,
      name: 'customElement',
      model: {
        textColor: '#555555',
        htmlContent: '<h1>Example</h1>',
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'textColor',
          model: 'textColor',
          placeholder: 'textColorPlaceholder',
        }, {
          type: 'textArea',
          label: 'htmlContent',
          model: 'htmlContent',
          placeholder: 'htmlContentPlaceholder',
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
