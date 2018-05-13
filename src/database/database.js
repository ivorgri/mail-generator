// import PouchDB from 'pouchdb';

import 'babel-polyfill';
import * as RxDB from 'rxdb';

import StateSchema from './StateSchema';
import UserSchema from './UserSchema';
import CollectionSchema from './CollectionSchema';

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [{
  name: 'state',
  schema: StateSchema,
}, {
  name: 'users',
  schema: UserSchema,
}, {
  name: 'templatecollections',
  schema: CollectionSchema,
}];

export default async function (store) {
  console.log('DatabaseService: creating database..');
  if (window.db !== undefined) {
    window.db.destroy();
  }
  const db = await RxDB.create({
    name: 'mailgenerator',
    adapter: 'idb',
    password: 'basicPassword',
  });
  window.db = db;
  console.log('DatabaseService: created database');

  store.commit('setDB', db);

  // Create collections
  console.log('DatabaseService: create collections');
  await Promise.all(collections.map(colData => db.collection(colData)));

  // Set initial state
  console.log('DatabaseService: setting initial state');
  const stateCollection = store.getters.db.state;
  const doc = await stateCollection.upsert({
    state: 'current',
    selectedUserId: '',
  });
  /* Users */

  /* const usersDB = new PouchDB('users');

  usersDB.changes({
    since: 'now',
    live: true,
  }).on('change', () => {
    store.dispatch('updateUsers');
  }).on('error', (error) => {
    console.log(error);
  });

  store.commit('setUsersDB', usersDB);
  await store.dispatch('updateUsers');

  /* Collections */
  /* const collectionsDB = new PouchDB('collectionsDB');

  collectionsDB.changes({
    since: 'now',
    live: true,
  }).on('change', () => {
    store.dispatch('updateCollections');
  }).on('error', (error) => {
    console.log(error);
  });

  store.commit('setCollectionsDB', collectionsDB);
  await store.dispatch('updateCollections');
  */
  return true;
}
