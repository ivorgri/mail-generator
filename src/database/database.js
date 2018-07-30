import 'babel-polyfill';
import * as RxDB from 'rxdb';

import StateSchema from './StateSchema';
import UserSchema from './UserSchema';
import ProjectSchema from './ProjectSchema';
import TemplateSchema from './TemplateSchema';
import ElementSchema from './ElementSchema';

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [{
  name: 'state',
  schema: StateSchema,
}, {
  name: 'users',
  schema: UserSchema,
}, {
  name: 'projects',
  schema: ProjectSchema,
}, {
  name: 'templates',
  schema: TemplateSchema,
}, {
  name: 'elements',
  schema: ElementSchema,
}];

let dbPromise = null;

const create = async () => {
  console.log('DatabaseService: Destroying old database..');
  // Only perform when performing E2E test
  if (window.Cypress) {
    await RxDB.removeDatabase('mailgenerator', 'idb');
  }
  // await RxDB.removeDatabase('mailgenerator', 'idb');
  console.log('DatabaseService: Creating database..');
  const db = await RxDB.create({
    name: 'mailgenerator',
    adapter: 'idb',
    password: 'basicPassword',
  });
  console.log('DatabaseService: Created database.');

  // Create projects
  console.log('DatabaseService: Creating projects...');
  try {
    await Promise.all(collections.map(colData => db.collection(colData)));
  } catch (error) {
    console.log(error);
  }

  return db;
};

export default () => {
  if (!dbPromise) {
    dbPromise = create();
  }
  return dbPromise;
};
