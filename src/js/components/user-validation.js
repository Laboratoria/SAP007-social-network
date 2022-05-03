import { authUserLabFriends, registerNewUser, forgotPassword } from '../../config/authentication.js';
import { errorsFirebase, errorsFirebaseModal } from './errors-firebase.js';
import { closeModalAutomatically } from './modal.js';

export const redirectedPage = '#feed';

export function userValidation(name, email, validatedEmail, password, passwordRepeat) {
  const message = document.querySelector('#message');

  if (!email || !password) {
    message.innerHTML = 'Preencha todos os campos!';
  } else if (!validatedEmail) {
    message.innerHTML = 'Preencha o campo<br>de email corretamente!';
  } else if (name && email && validatedEmail && password && passwordRepeat) {
    message.innerHTML = '';
    if (!name || !email || !password || !passwordRepeat) {
      message.innerHTML = 'Preencha todos os campos!';
    }
    if (password !== passwordRepeat) {
      message.innerHTML = 'As duas senhas não coincidem.<br>Digite-as novamente!';
    } else {
      registerNewUser(name, email, password)
        .then(() => {
          window.location.hash = redirectedPage;
        })
        .catch((error) => {
          errorsFirebase(error.code);
        });
    }
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

export function resetEmailValidation(emailReset, validatedEmail) {
  const emailClean = document.querySelector('#user-email-reset');
  const messageReset = document.querySelector('#message-reset');
  const modalClose = document.querySelector('[data-email="close"]');
  const modalContainer = document.querySelector('[data-email="container"]');

  if (!emailReset) {
    messageReset.innerHTML = 'Preencha o campo de email!';
  } else if (!validatedEmail) {
    messageReset.innerHTML = 'Preencha o campo<br>de email corretamente!';
  } else {
    forgotPassword(emailReset)
      .then(() => {
        messageReset.innerHTML = 'Email enviado com sucesso!';
        setTimeout(() => {
          emailClean.value = '';
          messageReset.innerHTML = '';
          closeModalAutomatically(modalClose, modalContainer);
        }, 3000);
      })
      .catch((error) => {
        errorsFirebaseModal(error.code);
        setTimeout(() => {
          emailClean.value = '';
          messageReset.innerHTML = '';
        }, 3000);
      });
  }
}
