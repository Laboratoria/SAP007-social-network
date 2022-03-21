// Este es el punto de entrada de tu aplicacion
import './configurafirebase/configfirebase.js';
import { myFunction } from './pages/login/main.js';

myFunction();
// console.log('antes');
// firebase.app.auth().signInWithEmailAndPassword('any@email.com', '123456').then((response) => {
//   console.log('success', response);
// }).catch((error) => {
//   console.log('error', error);
// });
// console.log('depois');
