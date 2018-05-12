import { isEmpty } from 'lodash';

const state = {
  collectionsDB: null,
  collections: {},
  selectedCollectionId: '',
};

const getters = {
  collectionsDB: state => state.collectionsDB,
  collections: state => state.collections,
  collectionSet: (state) => {
    if (isEmpty(state.collections)) {
      return [];
    }
    const collectionIds = Object.keys(state.collections);
    return collectionIds.map(collectionId => state.collections[collectionId]);
  },
  selectedCollectionId: state => state.selectedCollectionId,
  selectedCollection: (state) => {
    if (state.selectedCollectionId === '') {
      return false;
    }
    return state.collections[state.selectedCollectionId];
  },
};

const mutations = {
  setCollectionsDB(state, collectionsDB) {
    state.collectionsDB = collectionsDB;
  },
  setCollections(state, collections) {
    state.collections = collections;
  },
  selectCollection(state, selectedCollectionId) {
    state.selectedCollectionId = selectedCollectionId;
  },
  clearSelectedCollection(state) {
    state.selectedCollectionId = '';
  },
};

const actions = {
  async updateCollections({ getters, commit }) {
    let docs;
    try {
      docs = await getters.collectionsDB.allDocs({ include_docs: true });
    } catch (error) {
      console.log(error);
    }
    const collections = {};
    docs.rows.forEach((row) => {
      const { doc } = row;
      // eslint-disable-next-line
      collections[doc._id] = doc;
    });
    commit('setCollections', collections);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
