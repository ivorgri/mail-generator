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
    values: {
      type: 'array',
      item: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
      },
    },
  },
};

export default ElementSchema;
