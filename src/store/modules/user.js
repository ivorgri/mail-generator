const state = {
  user: {},
  showUserModal: false,
};

const getters = {
  showUserModal: state => state.showUserModal,
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
  getters,
  mutations,
};
