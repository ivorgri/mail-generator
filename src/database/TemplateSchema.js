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
    emailTitle: {
      type: 'string',
    },
    projectId: {
      type: 'string',
      index: true,
    },
    createTime: {
      type: 'string',
      format: 'date-time',
    },
    backgroundColor: {
      type: 'string',
    },
    inboxPreview: {
      type: 'string',
    },
    archived: {
      type: 'boolean',
      default: false,
    },
  },
  required: ['name'],
};

export default TemplateSchema;
