import { getAuth, GoogleAuthProvider, initializeApp } from './exports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDRDtG0KOp9htjlzbsm3Zrc1S65IOmLdzM',
  authDomain: 'go-trip-1874c.firebaseapp.com',
  projectId: 'go-trip-1874c',
  storageBucket: 'go-trip-1874c.appspot.com',
  messagingSenderId: '312474392410',
  appId: '1:312474392410:web:d20056044bd92331f1c563',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
