// eslint-disable-next-line
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import '../firebase/FireBaseConfig.js';

const loginAuth = getAuth();
const btnLogin = document.querySelector('#submit-form');
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const getEmail = document.querySelector('#email');
  const getPassword = document.querySelector('#password');
  signInWithEmailAndPassword(loginAuth, getEmail, getPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, 'entrou');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });

  console.log('entrou');
});
