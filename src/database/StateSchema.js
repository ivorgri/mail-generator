const StateSchema = {
  title: 'state schema',
  description: 'stores the ui state',
  version: 0,
  type: 'object',
  properties: {
    state: {
      type: 'string',
      primary: true,
      default: 'current',
    },
    locale: {
      type: 'string',
      default: 'en',
    },
    selectedProjectId: {
      type: 'string',
      default: '',
    },
  },
};

export default StateSchema;
