/* eslint-disable no-param-reassign, no-shadow */

const state = {
  interfaceState: {},
};

const getters = {
  interfaceState: state => state.interfaceState,
};

const mutations = {
  setInterfaceState(state, interfaceState) {
    state.interfaceState = interfaceState;
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
      console.log(error);
    }
    commit('setInterfaceState', interfaceStateDoc);
  },
  async updateInterfaceState({ getters }) {
    try {
      await getters.interfaceState.save();
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
