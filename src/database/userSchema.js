const userSchema = {
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
    },
  },
  required: ['locale', 'name'],
};

export default userSchema;
