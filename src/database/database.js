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
  console.log('DatabaseService: Destroying old database..');
  await RxDB.removeDatabase('mailgenerator', 'idb');
  console.log('DatabaseService: Creating database..');
  const db = await RxDB.create({
    name: 'mailgenerator',
    adapter: 'idb',
    password: 'basicPassword',
  });
  window.db = db;
  console.log('DatabaseService: Created database.');

  store.commit('setDB', db);

  // Create collections
  console.log('DatabaseService: Creating collections...');
  await Promise.all(collections.map(colData => db.collection(colData)));

  // Set initial state
  console.log('DatabaseService: Setting initial state.');
  const stateCollection = store.getters.db.state;
  await stateCollection.upsert({
    state: 'current',
    selectedUserId: '',
  });

  return true;
}
