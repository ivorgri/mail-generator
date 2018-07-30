/* eslint-disable no-param-reassign, no-shadow */

const state = {
  interfaceState: {},
  errors: [],
};

const getters = {
  interfaceState: state => state.interfaceState,
  errors: state => state.errors,
};

const mutations = {
  setInterfaceState(state, interfaceState) {
    state.interfaceState = interfaceState;
  },
  addError(state, error) {
    state.errors.push(error);
  },
  removeError(state, errorIndex) {
    state.errors.splice(errorIndex, 1);
  },
};

const actions = {
  async setInitialInterfaceState({ getters, commit }, locale) {
    const currentState = {
      state: 'current',
      locale,
      selectedProjectId: '',
    };
    let interfaceStateDoc;
    try {
      interfaceStateDoc = await getters.db.state.upsert(currentState);
    } catch (error) {
      getters.addError({ message: error, class: 'is-danger' });
    }
    commit('setInterfaceState', interfaceStateDoc);
  },
  async updateInterfaceState({ getters }) {
    try {
      await getters.interfaceState.save();
    } catch (error) {
      getters.addError({ message: error, class: 'is-danger' });
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
