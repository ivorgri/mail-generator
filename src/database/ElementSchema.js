const ElementSchema = {
  title: 'element schema',
  description: 'stores the element data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    name: {
      type: 'string',
    },
    coreElementId: {
      type: 'integer',
      index: true,
    },
    templateId: {
      type: 'string',
      index: true,
    },
    createTime: {
      type: 'string',
      format: 'date-time',
    },
    model: {
      type: 'object',
      properties: {
        backgroundColor: {
          type: 'string',
        },
        content: {
          type: 'string',
        },
        content2: {
          type: 'string',
        },
        content3: {
          type: 'string',
        },
        imageLink: {
          type: 'string',
        },
        imageLink2: {
          type: 'string',
        },
        imageLink3: {
          type: 'string',
        },
        imageAltText: {
          type: 'string',
        },
        imageAltText2: {
          type: 'string',
        },
        imageAltText3: {
          type: 'string',
        },
        textColor: {
          type: 'string',
        },
        webversionColor: {
          type: 'string',
        },
        buttonLink: {
          type: 'string',
        },
        buttonText: {
          type: 'string',
        },
        buttonColor: {
          type: 'string',
        },
        buttonTextColor: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        list: {
          type: 'string',
        },
        height: {
          type: 'integer',
        },
      },
    },
  },
};

export default ElementSchema;
