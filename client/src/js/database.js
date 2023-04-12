// destructuring openDB
import { openDB } from 'idb';

// if this version of the db hasn't been opened before on a users computer it will be 'upgraded' to the current schema
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // setting autoincrement to false because we only want a single database item anyways
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: false });
      console.log('jate database created');
    },
  });

// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: 1, value: content});
  const result = await request;
  console.log('saved to the database', result);
};

// logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  // the use of the question mark here denotes that if it throws an error, just accept it as undefined.
  // this came from Max and Ben because I had noticed that when left undefined result.value broke the app on initialization
  return result?.value;
};

initdb();
