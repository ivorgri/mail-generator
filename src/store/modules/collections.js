/* eslint-disable no-param-reassign, no-shadow */

import { isEmpty } from 'lodash';

const state = {
  collections: {},
  selectedCollectionId: '',
};

const getters = {
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
  async selectCollection({ getters, commit }, selectedCollectionId) {
    commit('selectCollection', selectedCollectionId);
    if (getters.selectedUser !== false) {
      getters.selectedUser.selectedCollectionId = selectedCollectionId;
      try {
        await getters.selectedUser.save();
      } catch (error) {
        console.log(error);
      }
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
