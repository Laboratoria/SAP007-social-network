/* eslint-disable no-unused-vars */
import { initializeApp, getFirestore, getAuth } from '../export.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCHQm4GkaSIhilU-MdYk7iItd09BUzqFA0',
  authDomain: 'social-network-1df01.firebaseapp.com',
  projectId: 'social-network-1df01',
  storageBucket: 'social-network-1df01.appspot.com',
  messagingSenderId: '794846527579',
  appId: '1:794846527579:web:89c6446e30a6a972493f7e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
