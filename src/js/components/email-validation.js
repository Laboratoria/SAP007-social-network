import { authUserLabFriends, registerNewUser } from '../../config/authentication.js';
import { errorsFirebase } from './errors-firebase.js';

export const redirectedPage = '#feed';
export function userValidation(name, email, validatedEmail, password, passwordRepeat) {
  const message = document.querySelector('#message');

  if (password !== passwordRepeat) {
    message.innerHTML = 'As duas senhas não coincidem.<br>Digite-as novamente!';
  } else if (!email || !password || !passwordRepeat || !name) {
    message.innerHTML = 'Preencha todos os campos!';
  } else if (!validatedEmail) {
    message.innerHTML = 'Preencha o campo<br>de email corretamente!';
  } else if (name && email && validatedEmail && password) {
    registerNewUser(name, email, password)
      .then(() => {
        window.location.hash = redirectedPage;
      })
      .catch((error) => {
        errorsFirebase(error.code);
      });
  } else {
    authUserLabFriends(email, password)
      .then(() => {
        window.location.hash = redirectedPage;
      })
      .catch((error) => {
        errorsFirebase(error.code);
      });
  }
}
