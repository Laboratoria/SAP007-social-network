// Este es el punto de entrada de tu aplicacion
import './configurafirebase/configfirebase.js';
import { pageLogin } from './pages/login/login.js';

// import { createLogin } from './pages/register/page-register.js';

pageLogin();

// createLogin();

// myFunction();
// console.log('antes');
// firebase.app.auth().signInWithEmailAndPassword('any@email.com', '123456').then((response) => {
//   console.log('success', response);
// }).catch((error) => {
//   console.log('error', error);
// });
// console.log('depois');
