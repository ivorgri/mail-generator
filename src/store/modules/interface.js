/* eslint-disable no-param-reassign, no-shadow */

const state = {
  interfaceAction: '',
  interfaceElement: '',
};

const getters = {
  interfaceAction: state => state.interfaceAction,
  interfaceElement: state => state.interfaceElement,
};

const mutations = {
  setAction(state, action) {
    state.interfaceAction = action;
  },
  setElement(state, element) {
    state.interfaceElement = element;
  },
};

export default {
  state,
  getters,
  mutations,
};
