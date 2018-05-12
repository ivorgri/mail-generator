const state = {
  usersDB: null,
  users: {},
  selectedUserId: '',
};

const getters = {
  usersDB: state => state.usersDB,
  users: state => state.users,
  selectedUserId: state => state.selectedUserId,
  selectedUser: (state) => {
    if (state.selectedUserId === '') {
      return false;
    }
    return state.users[state.selectedUserId];
  },
};

const mutations = {
  setUsersDB(state, usersDB) {
    state.usersDB = usersDB;
  },
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
  async updateUsers({ getters, commit }) {
    let docs;
    try {
      docs = await getters.usersDB.allDocs({ include_docs: true });
    } catch (error) {
      console.log(error);
    }
    const users = {};
    docs.rows.forEach((row) => {
      const { doc } = row;
      // eslint-disable-next-line
      users[doc._id] = doc;
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
