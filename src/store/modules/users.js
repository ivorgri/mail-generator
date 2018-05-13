/* eslint-disable no-param-reassign, no-shadow */

const state = {
  users: {},
  selectedUserId: '',
};

const getters = {
  users: state => state.users,
  selectedUserId: state => state.selectedUserId,
  selectedUser: state => (state.selectedUserId === '' ? false : state.users[state.selectedUserId]),
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  selectUser(state, selectedUserId) {
    state.selectedUserId = selectedUserId;
  },
  clearSelectedUser(state) {
    state.selectedUserId = '';
  },
};

const actions = {
  async updateUsers({ commit }, userDocs) {
    const users = {};
    userDocs.forEach((doc) => {
      users[doc.id] = doc;
    });
    commit('setUsers', users);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
