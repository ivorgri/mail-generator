const UserSchema = {
  title: 'user schema',
  description: 'stores the user data',
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
    locale: {
      type: 'string',
      default: 'nl',
    },
    createTime: {
      type: 'string',
      format: 'date-time',
    },
    selectedCollectionId: {
      type: 'string',
      default: '',
    },
  },
  required: ['locale', 'name'],
};

export default UserSchema;
