import { HeaderRetroceder } from './Header_retro.js';
import { auth } from '../firebase/firebase-auth.js';
import { getUserData, initListenerProfile } from '../firebase/firebase-data.js';
import { ModalEditProfile } from './ModalEditProfile.js';
import { Menu, ProfileList, MenuList } from './Menu.js';
import { ModalCerrarSesion } from './Modal_cerrarSesion.js';
import { ModalCreatePost } from './ModalCreatePost.js';

export const Profile = () => {
  const user = auth.currentUser;

  const profileComponent = document.createElement('div');
  profileComponent.classList.add('allView');

  const headerBack = HeaderRetroceder();
  const { modalCerrarSesion, abrilModalCerrarSesion } = ModalCerrarSesion();
  const { menuModalProfile, toggleModalProfile } = ProfileList(
    abrilModalCerrarSesion,
  );

  const { modalCreatePost, abrirModalCreatePost } = ModalCreatePost();

  const { menuModalPlus, toggleModalPlus } = MenuList(abrirModalCreatePost);
  // const menu = Menu(toggleModalProfile);
  const menu = Menu(toggleModalPlus, toggleModalProfile);

  //   Contenedor Base de la vista
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container__profile');

  //  * En este contenedor estarán dentro la imagen y el formulario
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('profile-container');

  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo__container');

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement('div');
  imgAvatarContainer.classList.add('photo__avatar-container');

  const photoAvatar = document.createElement('img');
  photoAvatar.classList.add('photo__avatar-img');
  photoAvatar.alt = 'imgAvatar';

  // todo: agregar alguna imagen gris o un loader skelet
  photoAvatar.src = 'https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198';

  imgAvatarContainer.append(photoAvatar);

  photoContainer.append(imgAvatarContainer);

  // -------------
  // Datos del usuario Formulario

  // Contenedor Base del formulario
  const formContainer = document.createElement('div');
  formContainer.classList.add('formProfile__container');

  // * Grupo: Nombre del usuario
  const groupName = document.createElement('div');
  groupName.classList.add('formProfile__group');

  //   Input nombre
  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.id = 'name';
  inputName.classList.add('formProfile__input');
  inputName.disabled = true;

  //   Label de nombre
  const labelName = document.createElement('label');
  labelName.for = 'name';
  labelName.classList.add('formProfile__label');
  labelName.textContent = 'Nombre';

  groupName.append(inputName);
  groupName.append(labelName);

  // -----------------------------

  // * Grupo: Fecha de Nacimiento del usuario
  const groupDate = document.createElement('div');
  groupDate.classList.add('formProfile__group');

  //   Input Fecha

  const inputDate = document.createElement('input');

  inputDate.id = 'date';
  inputDate.classList.add('formProfile__input');
  inputDate.disabled = true;

  //   Label de nombre
  const labelDate = document.createElement('label');
  labelDate.for = 'date';
  labelDate.classList.add('formProfile__label');
  labelDate.textContent = 'Fecha de Nacimiento';

  groupDate.append(inputDate);
  groupDate.append(labelDate);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupEmail = document.createElement('div');
  groupEmail.classList.add('formProfile__group');

  //   Input email
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.id = 'email';
  inputEmail.classList.add('formProfile__input');
  inputEmail.disabled = true;

  //   Label de email
  const labelEmail = document.createElement('label');
  labelEmail.for = 'email';
  labelEmail.classList.add('formProfile__label');
  labelEmail.textContent = 'Correo';

  groupEmail.append(inputEmail);
  groupEmail.append(labelEmail);

  // -----------------------------

  //   Contenedor de campos obligatorios
  const msgContainer = document.createElement('div');
  msgContainer.classList.add('msgContainer');

  const msgLogedByGoogle = document.createElement('span');
  msgLogedByGoogle.classList.add('google-msg');

  msgLogedByGoogle.textContent = 'Usted está logeado con Google';

  const changePwd = document.createElement('span');
  changePwd.classList.add('google-msg');
  changePwd.classList.add('redirect-text__link');
  // changePwd.id = "changePwd";
  changePwd.textContent = 'Cambiar contraseña';

  changePwd.addEventListener('click', () => {
    window.location.hash = '#/passwordChange';
  });

  // -----------------------------

  const btnEdit = document.createElement('input');
  btnEdit.id = 'submit';
  btnEdit.type = 'submit';
  btnEdit.classList.add('formProfile__submit');
  btnEdit.value = 'Editar';

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupName);
  formContainer.append(groupDate);
  formContainer.append(groupEmail);

  // -----------------------------

  const { modalEditProfile, abrirModalEditProfile } = ModalEditProfile();

  btnEdit.addEventListener('click', () => {
    abrirModalEditProfile();
  });

  profileComponent.append(modalCreatePost);
  profileComponent.append(menuModalProfile);
  profileComponent.append(menuModalPlus);
  profileComponent.append(menu);
  profileComponent.append(headerBack);
  profileComponent.append(mainContainer);
  mainContainer.append(profileContainer);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);
  profileComponent.append(modalEditProfile);
  profileComponent.append(modalCerrarSesion);

  //   --------------
  initListenerProfile(user.uid, () => {
    getUserData(user.uid)
      .then((u) => {
        photoAvatar.src = u.user_photo;
        inputDate.type = 'date';
        inputName.value = u.user_name;
        inputDate.value = u.user_birth;
        inputEmail.value = u.user_email;

        if (u.user_logedBy === 'google') {
          groupDate.classList.add('hidden');
          formContainer.append(msgContainer);
          msgContainer.append(msgLogedByGoogle);
        } else {
          formContainer.append(btnEdit);
          formContainer.append(msgContainer);
          msgContainer.append(changePwd);
        }
      })
      .catch(() => {});
  });

  return profileComponent;
};
