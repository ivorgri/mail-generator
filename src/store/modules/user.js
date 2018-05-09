const state = {
  user: {},
  showUserModal: false,
};

const mutations = {
  showUserModal(state) {
    state.showUserModal = true;
  },
  hideUserModal(state) {
    state.showUserModal = false;
  },
};

export default {
  state,
  mutations,
};
