import Vue from 'vue';

const state = {
  users: {},
  showUserModal: false,
  userModalAction: '',
  selectedUserId: '',
};

const getters = {
  showUserModal: state => state.showUserModal,
  userModalAction: state => state.userModalAction,
  selectedUser: state => state.users[state.selectedUserId],
};

const mutations = {
  showUserModal(state, modalAction) {
    state.showUserModal = true;
    state.userModalAction = modalAction;
  },
  hideUserModal(state) {
    state.showUserModal = false;
  },
  addUser(state, user) {
    Vue.set(state.users, user.id, user);
  },
  selectUser(state, selectedUserId) {
    state.selectedUserId = selectedUserId;
  },
  clearSelectedUser(state) {
    state.selectedUserId = '';
  },
};

const actions = {
  addUser({ commit }, user) {
    commit('hideUserModal');
    commit('addUser', user);
    commit('selectUser', user.id);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
