// eslint-disable-next-line
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAGrWsT7kTZ2_UtPKCFzMleOBr3TCZ3dA8',
  authDomain: 'mirama-social-network.firebaseapp.com',
  databaseURL: 'https://mirama-social-network-default-rtdb.firebaseio.com',
  projectId: 'mirama-social-network',
  storageBucket: 'mirama-social-network.appspot.com',
  messagingSenderId: '887687261584',
  appId: '1:887687261584:web:654afba21039e35c469715',
  measurementId: 'G-JMPMFK4GSR',
};

export const app = initializeApp(firebaseConfig);
