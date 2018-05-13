/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  collectionsDB: null,
  collections: {},
  selectedCollectionId: '',
};

const getters = {
  collectionsDB: state => state.collectionsDB,
  collections: state => state.collections,
  collectionSet: (state, getters) => {
    if (isEmpty(state.collections)) {
      return [];
    }
    const collectionIds = Object.keys(state.collections);
    const collectionSet = [];
    collectionIds.forEach((collectionId) => {
      if (state.collections[collectionId].authorId === getters.selectedUserId) {
        collectionSet.push(state.collections[collectionId]);
      }
    });
    return collectionSet;
  },
  selectedCollectionId: state => state.selectedCollectionId,
  selectedCollection: state => (state.selectedCollectionId === '' ? false :
    state.collections[state.selectedCollectionId]),
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
  async updateCollections({ commit }, collectionDocs) {
    const collections = {};
    collectionDocs.forEach((doc) => {
      collections[doc.id] = doc;
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
