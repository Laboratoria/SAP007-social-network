import {
  auth,
  app,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from './firebase-initializer.js';

import {
  validateField,
  validatePassword,
  validateEmail,
} from '../helpers/forms-validation.js';

import { addUser } from './firebase-data.js';

export { sendPasswordResetEmail, auth };

const provider = new GoogleAuthProvider(app);

/** *****************Inicio de sesion con correo************************** */
export const enviarAcesso = (email, password) => signInWithEmailAndPassword(auth, email, password);

/** **********************Continuar con Google********************************* */
export const loginGoogle = () => signInWithPopup(auth, provider)
// ! Deberiamos chequear primero si esta cuenta ya se encuentra registrada en el firebase,
  // ! en caso de estar en el firestore, pedirle que ingrese sus datos
  .then((response) => {
    const user = response.user;
    addUser(user, '', '');
    window.location.hash = '#/timeline';
  });

/** *************************Cerrar sesión************************** */
export const logOutGoogle = () => { signOut(auth); };

/** ****************Registro con correo************************* */
export function enviarRegistro() {
  document.getElementById('errorLogin').textContent = '';
  // Primera vista de registro
  const name = document.getElementById('rname');
  const email = document.getElementById('remail');
  const password = document.getElementById('rpassword');

  name.classList.remove('error');
  email.classList.remove('error');
  password.classList.remove('error');

  const nameV = name.value.trim();
  const emailV = email.value.trim();
  const passwordV = password.value.trim();
  // Validando los campos

  // ------------------------------------

  if (!validateEmail(emailV) || !validatePassword(passwordV)) {
    document.getElementById('errorLogin').textContent = 'Datos inválidos';
  }

  if (
    !validateField(nameV)
    || !validateField(emailV)
    || !validateField(passwordV)
  ) {
    document.getElementById('errorLogin').textContent = 'Datos inválidos';
    // Pinta el input
    name.classList.remove('success');
    email.classList.remove('success');
    password.classList.remove('success');

    name.classList.add('error');
    email.classList.add('error');
    password.classList.add('error');
  } else {
    name.classList.remove('error');
    email.classList.remove('error');
    password.classList.remove('error');

    name.classList.add('success');
    email.classList.add('success');
    password.classList.add('success');

    // Validando los campos de la siguiente vista, si están vacios
    createUserWithEmailAndPassword(auth, emailV, passwordV)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Añadimos a este usuario en nuestra base de datos
        return addUser(user, nameV, passwordV);
      })
      .then(() => updateProfile(auth.currentUser, {
        displayName: nameV,
        photoURL:
            'gs://girl-talk-app.appspot.com',
      })
        .then(() => {
          // Profile updated!
          window.location.hash = '#/timeline';
        }))
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/email-already-in-use':
            document.getElementById('errorLogin').textContent = 'El correo ingresado ya está en uso';
            break;
          default:
        }
      });
  }
}

export function changeNameAndPhotoAuth(objNewData) {
  updateProfile(auth.currentUser, {
    displayName: objNewData.user_name,
    photoURL: objNewData.user_photo,
  });
}

// Siempre me pedirán credencial para eliminar cuenta, cambiar contraseña o correo
export const createCredential = (user, password) => {
  const email = user.email;
  const credential = EmailAuthProvider.credential(email, password);
  return credential;
};

// El método indicará la funcion (si es para actualizar el correo o la contraseña)
export const reauth = async (user, credential) => reauthenticateWithCredential(user, credential);

export const changePasswordAuth = (user, newPassword) => updatePassword(user, newPassword);

export const changeEmailAuth = (user, newEmail) => updateEmail(user, newEmail);
