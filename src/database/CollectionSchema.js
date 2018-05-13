const CollectionSchema = {
  title: 'user schema',
  description: 'stores the collection data',
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
  },
  required: ['name'],
};

export default CollectionSchema;
