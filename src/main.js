// eslint-disable-next-line
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';
import pageLogin from './pages/pageLogin/login.js';
import pageRegister from './pages/pageRegister/register.js';
import pageFeed from './pages/pageFeed/feed.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB7y2SIkbcEdeOy_6k2_sf6ekhP_s-quL4',
  authDomain: 'zazen---social-network.firebaseapp.com',
  projectId: 'zazen---social-network',
  storageBucket: 'zazen---social-network.appspot.com',
  messagingSenderId: '751150616587',
  appId: '1:751150616587:web:f1f3afcdfcf30e3e14770e',
};

const app = initializeApp(firebaseConfig);

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
  const url = window.location.hash;
  console.log(url);
  let page;
  switch (url) {
    case '#register':
      page = pageRegister();
      break;
    case '#feed':
      page = pageFeed();
      break;
    default:
      page = pageLogin();
  }
  main.appendChild(page);
};

window.addEventListener('load', init);
window.addEventListener('hashchange', init);
