import { initializeApp, getAuth, getFirestore } from './export.js'; // eslint-disable-next-line

const firebaseConfig = {
  apiKey: 'AIzaSyCNu5tg68pS65UVJ6vaUjYgYonYzfYvR7w',
  authDomain: 'laboratoriafriends.firebaseapp.com',
  projectId: 'laboratoriafriends',
  storageBucket: 'laboratoriafriends.appspot.com',
  messagingSenderId: '1048862460473',
  appId: '1:1048862460473:web:7a932ebb5a4a76eccc9be8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
