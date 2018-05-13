const state = {
  db: null,
};

const getters = {
  db: state => state.db,
};

const mutations = {
  setDB(state, db) {
    state.db = db;
  },
};

export default {
  state,
  getters,
  mutations,
};
