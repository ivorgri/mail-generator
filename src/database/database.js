import 'babel-polyfill';
// import * as RxDB from '';
import 'rxjs';
import RxDB from 'rxdb';
import UserSchema from './userSchema';

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [{
  name: 'users',
  schema: UserSchema,
}];

window.dbs = window.dbs || [];
async function clearPrev() {
  await Promise.all(window.dbs.map(db => db.destroy()));
}

export default async function () {
  // console.log('DatabaseService: creating database..');
  await clearPrev();
  const db = await RxDB.create({
    name: 'mailgenerator',
    adapter: 'idb',
  });
  window.dbs.push(db);
  // console.log('DatabaseService: created database');
  window.db = db;

  // Create collections
  // console.log('DatabaseService: create collections');
  await Promise.all(collections.map(colData => db.collection(colData)));

  return db;
}
