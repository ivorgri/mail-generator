const TemplateSchema = {
  title: 'template schema',
  description: 'stores the template data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    name: {
      type: 'string',
      min: 3,
    },
    description: {
      type: 'string',
    },
    collectionId: {
      type: 'string',
      index: true,
    },
    createTime: {
      type: 'string',
      format: 'date-time',
    },
    color: {
      type: 'string',
    },
  },
  required: ['name'],
};

export default TemplateSchema;
