import PouchDB from 'pouchdb';

export default async function (store) {
  /* Users */
  const usersDB = new PouchDB('users');

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
  const collectionsDB = new PouchDB('collectionsDB');

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

  return true;
}
