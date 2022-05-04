import { initializeApp } from './exports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAOhKqo7lJpdWp4hLImccHwhEKVTgG2jo4',
  authDomain: 'devdoubt---social-network.firebaseapp.com',
  projectId: 'devdoubt---social-network',
  storageBucket: 'devdoubt---social-network.appspot.com',
  messagingSenderId: '1088547453612',
  appId: '1:1088547453612:web:e3e36bc7cd272e7a0cfd09',
};

export const app = initializeApp(firebaseConfig);
