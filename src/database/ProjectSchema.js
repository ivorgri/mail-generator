const ProjectSchema = {
  title: 'project schema',
  description: 'stores the project data',
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
    authorId: {
      type: 'string',
      index: true,
    },
    createTime: {
      type: 'string',
      format: 'date-time',
    },
    selectedTemplateId: {
      type: 'string',
    },
  },
  required: ['name'],
};

export default ProjectSchema;
