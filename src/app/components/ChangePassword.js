import { HeaderRetroceder } from './Header_retro.js';
import {
  getUserData,
  changePasswordFirestore,
} from '../firebase/firebase-data.js';
import {
  validateField,
  validatePassword,
} from '../helpers/forms-validation.js';
import {
  auth,
  changePasswordAuth,
  reauth,
  createCredential,
} from '../firebase/firebase-auth.js';
import { ModalEditProfile } from './ModalEditProfile.js';
import { Menu, ProfileList, MenuList } from './Menu.js';
import { ModalCerrarSesion } from './Modal_cerrarSesion.js';
import { ModalCreatePost } from './ModalCreatePost.js';

export const ChangePassword = () => {
  const user = auth.currentUser;
  //    Contenedor principal
  const profileComponent = document.createElement('div');
  profileComponent.classList.add('allView');

  const { modalCerrarSesion, abrilModalCerrarSesion } = ModalCerrarSesion();
  const { menuModalProfile, toggleModalProfile } = ProfileList(
    abrilModalCerrarSesion,
  );

  const { modalCreatePost, abrirModalCreatePost } = ModalCreatePost();

  const { menuModalPlus, toggleModalPlus } = MenuList(abrirModalCreatePost);

  const { modalEditProfile } = ModalEditProfile();
  // const menu = Menu(toggleModalProfile);
  const menu = Menu(toggleModalPlus, toggleModalProfile);

  const headerBack = HeaderRetroceder();

  //   Contenedor Base de la vista
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container__profile');

  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile-container');

  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo__container');
  // photoContainer.style.background = "blue";

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement('div');
  imgAvatarContainer.classList.add('photo__avatar-container');

  const photoAvatar = document.createElement('img');
  photoAvatar.classList.add('photo__avatar-img');
  photoAvatar.alt = 'imgAvatar';

  imgAvatarContainer.append(photoAvatar);

  const userNameContainer = document.createElement('div');
  userNameContainer.classList.add('userNameContainer');

  const userName = document.createElement('h1');
  userName.classList.add('userNameTitle');

  userNameContainer.append(userName);

  photoContainer.append(imgAvatarContainer);
  photoContainer.append(userNameContainer);

  // -------------
  // Datos del usuario Formulario para actualizar contraseña

  // Contenedor Base del formulario
  const formContainer = document.createElement('div');
  formContainer.classList.add('formProfile__container');

  // * Grupo: Contraseña antigua
  const groupOldPassword = document.createElement('div');
  groupOldPassword.classList.add('formProfile__group');

  //   Input Contraseña antigua
  const inputOldPassword = document.createElement('input');
  inputOldPassword.type = 'text';
  inputOldPassword.id = 'oldPassword';
  inputOldPassword.classList.add('formProfile__input');

  //   Label de Contraseña antigua
  const labelOldPassword = document.createElement('label');
  labelOldPassword.htmlFor = 'oldPassword';
  labelOldPassword.classList.add('formProfile__label');
  labelOldPassword.textContent = 'Contraseña antigua';

  groupOldPassword.append(inputOldPassword);
  groupOldPassword.append(labelOldPassword);

  // -----------------------------

  // * Grupo: Nueva Contraseña
  const groupNewPassword = document.createElement('div');
  groupNewPassword.classList.add('formProfile__group');

  //   Input NewPassword
  const inputNewPassword = document.createElement('input');

  inputNewPassword.type = 'text';
  inputNewPassword.id = 'newPassword';
  inputNewPassword.classList.add('formProfile__input');

  //   Label de NewPassword
  const labelNewPassword = document.createElement('label');
  labelNewPassword.htmlFor = 'newPassword';
  labelNewPassword.classList.add('formProfile__label');
  labelNewPassword.textContent = 'Contraseña Nueva';

  groupNewPassword.append(inputNewPassword);
  groupNewPassword.append(labelNewPassword);

  // -----------------------------

  // * Grupo: Confirmar la nueva contraseña
  const groupConfirmPassword = document.createElement('div');
  groupConfirmPassword.classList.add('formProfile__group');

  //   Label de ConfirmPassword
  const labelConfirmPassword = document.createElement('label');
  labelConfirmPassword.classList.add('formProfile__label');
  labelConfirmPassword.textContent = 'Confirmar nueva contraseña';
  labelConfirmPassword.htmlFor = 'confirmedPassword';

  //   Input ConfirmPassword
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type = 'text';
  inputConfirmPassword.id = 'confirmedPassword';
  inputConfirmPassword.classList.add('formProfile__input');

  groupConfirmPassword.append(inputConfirmPassword);
  groupConfirmPassword.append(labelConfirmPassword);

  // -----------------------------

  const msgContainer = document.createElement('div');
  msgContainer.classList.add('msgContainer');

  const msgError = document.createElement('span');
  msgError.classList.add('error-msg');
  msgError.id = 'error-msg';

  msgContainer.append(msgError);

  // -----------------------------

  const btnSaveChanges = document.createElement('input');
  btnSaveChanges.id = 'submit';
  btnSaveChanges.type = 'submit';
  btnSaveChanges.classList.add('formProfile__submit');
  btnSaveChanges.value = 'Cambiar contraseña';

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupOldPassword);
  formContainer.append(groupNewPassword);
  formContainer.append(groupConfirmPassword);
  formContainer.append(msgContainer);
  formContainer.append(btnSaveChanges);
  profileComponent.append(headerBack);
  profileComponent.append(mainContainer);
  mainContainer.append(profileContainer);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);
  // ---
  profileComponent.append(modalCreatePost);
  profileComponent.append(menuModalProfile);
  profileComponent.append(menuModalPlus);
  profileComponent.append(menu);
  // -----
  profileComponent.append(modalEditProfile);
  profileComponent.append(modalCerrarSesion);

  //   --------------

  btnSaveChanges.addEventListener('click', async () => {
    const newData = {
      inputOldPassword: inputOldPassword.value,
      newPassword: inputNewPassword.value,
      confirmedPassword: inputConfirmPassword.value,
    };

    document.getElementById('error-msg').textContent = '';
    msgError.classList.add('error-msg');
    msgError.classList.remove('success-msg');

    if (
      !validateField(newData.inputOldPassword)
      || !validateField(newData.newPassword)
      || !validateField(newData.confirmedPassword)
    ) {
      document.getElementById('error-msg').textContent = 'Rellene todos los campos';
      return;
    }

    // Validamos la contraseña nueva
    if (!validatePassword(newData.newPassword)) {
      document.getElementById('error-msg').textContent = 'La contraseña debe tener entre 8 a 14 carácteres';
      return;
    }

    // Validar que la nueva contraseña no es la misma inicialmente
    if (newData.inputOldPassword === newData.newPassword) {
      document.getElementById('error-msg').textContent = 'Ingresa una contraseña diferente a la actual.';
      return;
    }

    // Validar si la contraseña ingresada está bien tipeada
    if (newData.newPassword !== newData.confirmedPassword) {
      document.getElementById('error-msg').textContent = 'Ambas contraseñas deben coincidir.';
      return;
    }

    const credential = await createCredential(user, newData.inputOldPassword);

    reauth(user, credential)
      .then(() => {
        const promises = [
          changePasswordAuth(user, newData.newPassword),
          changePasswordFirestore(user.uid, newData.newPassword),
        ];

        Promise.all(promises)
          .then(() => {
            msgError.classList.remove('error-msg');
            msgError.classList.add('success-msg');
            document.getElementById('error-msg').textContent = 'Cambios realizados!';
          });

        // todo: actualizar la página cuando todos los procesos finalicen
        // todo: mostrar en pantalla un spiner y que fue realizado!
      })
      .catch(() => {
        document.getElementById('error-msg').textContent = 'Error de autentificación ';
      });
  });

  getUserData(user.uid)
    .then((userFirestore) => {
      photoAvatar.src = userFirestore.user_photo;
      userName.textContent = userFirestore.user_name;
    });

  return profileComponent;
};
