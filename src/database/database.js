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

/* window.dbs = window.dbs || [];
const clearPrev = async () => {
  await Promise.all(window.dbs.map(db => db.destroy()));
}; */

let dbPromise = null;

const create = async () => {
  // console.log('DatabaseService: Destroying old database..');
  // await clearPrev();
  // await RxDB.removeDatabase('mailgenerator', 'idb');
  console.log('DatabaseService: Creating database..');
  const db = await RxDB.create({
    name: 'mailgenerator',
    adapter: 'idb',
    password: 'basicPassword',
  });
  // window.dbs.push(db);
  console.log('DatabaseService: Created database.');
  // window['db'] = db;

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
