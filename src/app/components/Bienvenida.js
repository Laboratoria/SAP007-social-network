import { getUserData } from '../firebase/firebase-data.js';

export function Bienvenida(abrirModalCreatePost, user) {
  const contenedorBienvenida = document.createElement('div');
  contenedorBienvenida.classList.add('perfil-grid');
  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo__container', 'row', 'card');
  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement('div');
  imgAvatarContainer.classList.add('photo__avatar-container');
  const photoAvatar = document.createElement('img');
  photoAvatar.classList.add('photo__avatar-img');
  photoAvatar.alt = 'imgAvatar';

  const nombre = document.createElement('h1');
  nombre.classList.add('userNameTitle');

  imgAvatarContainer.append(photoAvatar);
  photoContainer.append(imgAvatarContainer);
  photoContainer.append(nombre);

  // eslint-disable-next-line no-use-before-define
  obtenerUsuario(user.uid, photoAvatar, nombre);

  // -----------------------------------------------------------------------------------
  const buttonAddPost = document.createElement('button');
  buttonAddPost.classList.add('buttonAddPost_desktop');

  const iconPlus = document.createElement('i');
  iconPlus.classList.add('icon-addPost');
  iconPlus.classList.add('btn-addPost__text');

  const textBtn = document.createElement('span');
  textBtn.textContent = 'Crear Post';
  // textBtn.classList.add('btn-addPost__text-small');
  textBtn.classList.add('btn-addPost__text--small');

  const buttonContent = document.createElement('div');
  buttonContent.classList.add('btn-addPost__text--centered');
  buttonContent.append(textBtn);
  buttonContent.append(iconPlus);

  buttonAddPost.append(buttonContent);
  // buttonAddPost.append(iconPlus);

  buttonAddPost.addEventListener('click', () => {
    abrirModalCreatePost();
  });

  contenedorBienvenida.append(photoContainer);
  photoContainer.append(buttonAddPost);

  return contenedorBienvenida;
}

export function obtenerUsuario(userId, userPhoto, userName) {
  return getUserData(userId)
    .then((user) => {
      const name = userName;
      const photo = userPhoto;
      photo.src = user.user_photo;
      name.textContent = `¿Qué estás pensando, ${user.user_name}?`;
    });
}
