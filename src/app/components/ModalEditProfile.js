import {
  getUserData,
  changeBasicDataFirestore,
  isExistingUser,
} from '../firebase/firebase-data.js';
import {
  auth,
  // validateEmail,
  // validateField,
  changeNameAndPhotoAuth,
  changeEmailAuth,
  createCredential,
  reauth,
} from '../firebase/firebase-auth.js';
import { validateEmail, validateField } from '../helpers/forms-validation.js';

import { uploadUserProfileImg } from '../firebase/firebase-storage.js';
import { Loader } from '../view-controller/Loader.js';

export const ModalEditProfile = () => {
  const user = auth.currentUser;
  // Todos estos son los datos actuales del usuario
  let userNameFirestore;
  let userBirthFirestore;
  let userEmailFirestore;
  let userPasswordFirestore;
  let userPhoto;

  const modalContenedor = document.createElement('div');
  modalContenedor.classList.add('modal__contenedor');
  modalContenedor.classList.add('modal-cerrar');

  const profileContainer = document.createElement('div');
  profileContainer.classList.add('modal-profile');
  modalContenedor.append(profileContainer);

  // Cabecera del modal

  const headerModal = document.createElement('div');
  headerModal.classList.add('modal-profile__header');

  const titulo = document.createElement('h2');
  titulo.classList.add('modal-profile__title');
  titulo.textContent = 'Edita tu perfil';

  const closeIcon = document.createElement('span');
  closeIcon.classList.add('icon-icon-close', 'modal-profile__closeIcon');

  headerModal.append(titulo);
  headerModal.append(closeIcon);

  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo__container');

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement('div');
  imgAvatarContainer.classList.add('photo__avatar-container');

  const photoAvatar = document.createElement('img');
  photoAvatar.classList.add('photo__avatar-img');
  photoAvatar.alt = 'imgAvatar';
  photoAvatar.src = 'https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198';

  imgAvatarContainer.append(photoAvatar);

  const inputFileNone = document.createElement('input');
  inputFileNone.type = 'file';
  inputFileNone.accept = 'image/*';
  inputFileNone.id = 'file';
  inputFileNone.style.display = 'none';

  // * Este es el label
  // Icono para editar imagen del usuario
  const iconPhotoContainer = document.createElement('label');
  iconPhotoContainer.id = '';
  iconPhotoContainer.htmlFor = 'file';

  const throwMsg = document.createElement('span');
  throwMsg.classList.add('error-msg');
  throwMsg.id = 'error-msg';

  iconPhotoContainer.addEventListener('click', () => {
    throwMsg.textContent = '';
  });

  inputFileNone.addEventListener('change', (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      photoAvatar.src = objectURL;
    }
  });

  iconPhotoContainer.classList.add('photo__edit-img');
  const iconPhoto = document.createElement('span');
  iconPhoto.classList.add('icon-pencil', 'pencil');

  iconPhotoContainer.append(iconPhoto);
  imgAvatarContainer.append(iconPhotoContainer);
  imgAvatarContainer.append(inputFileNone);

  photoContainer.append(imgAvatarContainer);

  // -------------
  // Datos del usuario Formulario

  // Contenedor Base del formulario
  const formContainer = document.createElement('div');
  // todo: cambiar clase de modal

  formContainer.classList.add('modal-profile__container');

  // * Grupo: Nombre del usuario
  const groupName = document.createElement('div');
  groupName.classList.add('formProfile__group');

  //   Input nombre
  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.id = 'name';
  inputName.classList.add('modal-profile__input');
  inputName.placeholder = 'Nombre';

  //  Nombre Obligatorio
  const requiredName = document.createElement('span');
  requiredName.classList.add('modal-profile__required');
  requiredName.textContent = '*';

  groupName.append(inputName);
  groupName.append(requiredName);

  inputName.addEventListener('click', () => {
    throwMsg.textContent = '';
  });

  // -----------------------------

  // * Grupo: Fecha de Nacimiento del usuario
  const groupDate = document.createElement('div');
  groupDate.classList.add('formProfile__group');

  //   Input Fecha
  const inputDate = document.createElement('input');
  inputDate.type = 'date';
  inputDate.id = 'date';
  inputDate.classList.add('modal-profile__input');

  groupDate.append(inputDate);

  inputDate.addEventListener('click', () => {
    throwMsg.textContent = '';
  });

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupEmail = document.createElement('div');
  groupEmail.classList.add('formProfile__group');

  //   Input email
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.id = 'email';
  inputEmail.placeholder = 'Correo electrónico';
  inputEmail.classList.add('modal-profile__input');

  inputEmail.addEventListener('click', () => {
    throwMsg.textContent = '';
  });

  //  Email Obligatorio
  const requiredEmail = document.createElement('span');
  requiredEmail.classList.add('modal-profile__required');
  requiredEmail.textContent = '*';

  groupEmail.append(inputEmail);
  groupEmail.append(requiredEmail);

  // -----------------------------

  //   Contenedor de campos obligatorios
  const errContainer = document.createElement('div');
  errContainer.classList.add('errContainer--modal');

  errContainer.append(throwMsg);
  // -----------------------------

  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('modal-profile__btns-container');

  const btnCancel = document.createElement('input');
  btnCancel.id = 'cancelChanges';
  btnCancel.type = 'submit';
  btnCancel.classList.add('modal-profile__btn');
  btnCancel.value = 'Cancelar';

  const btnSaveChanges = document.createElement('input');
  btnSaveChanges.id = 'saveChanges';
  btnSaveChanges.type = 'submit';
  btnSaveChanges.classList.add('modal-profile__btn');
  btnSaveChanges.value = 'Guardar';

  btnsContainer.append(btnCancel);
  btnsContainer.append(btnSaveChanges);

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupName);
  formContainer.append(groupDate);
  formContainer.append(groupEmail);
  //   Apendizamos el mensaje de error
  formContainer.append(errContainer);
  formContainer.append(btnsContainer);

  // -----------------------------

  profileContainer.append(headerModal);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);

  // Modal oculto
  modalContenedor.style.opacity = '0';
  modalContenedor.style.visibility = 'hidden';

  const abrirModal = () => {
    modalContenedor.style.opacity = '1';
    modalContenedor.style.visibility = 'visible';
    modalContenedor.classList.toggle('modal-cerrar');
  };
  const cerrarModal = () => {
    modalContenedor.classList.toggle('modal-cerrar');
    modalContenedor.style.opacity = '0';
    modalContenedor.style.visibility = 'hidden';
  };

  // Limpia el mensaje que lanza el modal
  closeIcon.addEventListener('click', () => {
    cerrarModal();
    throwMsg.textContent = '';
  });

  // Limpia el mensaje que lanza el modal
  btnCancel.addEventListener('click', () => {
    cerrarModal();
    throwMsg.textContent = '';
  });

  btnSaveChanges.addEventListener('click', async () => {
    const newData = {
      user_name: inputName.value,
      user_birth: inputDate.value,
      user_email: inputEmail.value,
      user_photo: photoAvatar.src,
      user_exist: false,
      user_password: userPasswordFirestore,
    };

    throwMsg.textContent = '';
    throwMsg.classList.add('error-msg');
    throwMsg.classList.remove('success-msg');

    const { emailUserSearched, userExist } = await isExistingUser(
      newData.user_email,
    );

    // Limpiamos el modal
    throwMsg.textContent = '';
    const requiredFields = document.getElementsByClassName(
      'modal-profile__required',
    );
    // eslint-disable-next-line no-restricted-syntax
    for (const element of requiredFields) {
      element.classList.remove('modal-profile__required--active');
    }

    throwMsg.textContent = '';
    // Validamos el nombre
    if (!validateField(newData.user_name)) {
      throwMsg.textContent = 'Ingrese un nombre válido';

      // Activa campo como obligatorio
      requiredName.classList.add('modal-profile__required--active');
      return;
    }
    // Validamos el correo
    if (!validateEmail(newData.user_email)) {
      throwMsg.textContent = 'Ingrese un correo válido';
      // Activa campo como obligatorio
      requiredEmail.classList.add('modal-profile__required--active');
      return;
    }
    if (userExist && emailUserSearched !== userEmailFirestore) {
      throwMsg.textContent = 'Esta cuenta ya está siendo utilizada';
      return;
    }
    // Si los datos nunca fueron modificados
    if (
      newData.user_name === userNameFirestore
      && newData.user_birth === userBirthFirestore
      && newData.user_email === userEmailFirestore
      && newData.user_photo === userPhoto
    ) {
      throwMsg.textContent = 'Actualice los datos';
      return;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const element of requiredFields) {
      element.classList.remove('modal-profile__required--active');
    }

    const loader = Loader();
    loader.classList.add('spinnerContainer--absolute');
    throwMsg.textContent = '';
    modalContenedor.appendChild(loader);

    const credential = await createCredential(user, newData.user_password);

    reauth(user, credential)
      .then(() => {
        // Verifica si el usuario adjuntó alguna imagen para su perfil
        if (inputFileNone.files[0]) {
          return uploadUserProfileImg(inputFileNone.files[0], user.uid);
        }
        return Promise.resolve('');
      })
      .then((urlImg) => {
        if (urlImg !== '') {
          newData.user_photo = urlImg;
        }

        return changeEmailAuth(user, newData.user_email);
      })
      .then(() => changeNameAndPhotoAuth(newData))
      .then(() => changeBasicDataFirestore(user.uid, newData))
      .then(() => getUserData(user.uid))
      .then((u) => {
        userPasswordFirestore = u.user_password;
        userNameFirestore = u.user_name;
        userBirthFirestore = u.user_birth;
        userEmailFirestore = u.user_email;
        userPhoto = u.user_photo;
      })
      .then(() => {
        throwMsg.classList.remove('error-msg');
        throwMsg.classList.add('success-msg');
        throwMsg.textContent = 'Cambios realizados!';
        // Cuando termine todos los procesos se oculta el spinner
        loader.remove();
      })
      .catch(() => {
        throwMsg.textContent = 'Error de autentificación ';
      });
  });

  getUserData(user.uid)
    .then((u) => {
      photoAvatar.src = u.user_photo;
      inputName.value = u.user_name;
      inputDate.value = u.user_birth;
      inputEmail.value = u.user_email;
      userPhoto = u.user_photo;
      userNameFirestore = u.user_name;
      userBirthFirestore = u.user_birth;
      userEmailFirestore = u.user_email;
      userPasswordFirestore = u.user_password;
    });

  return {
    modalEditProfile: modalContenedor,
    abrirModalEditProfile: abrirModal,
    cerrarModalEditProfile: cerrarModal,
  };
};
