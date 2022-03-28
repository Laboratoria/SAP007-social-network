import { auth } from '../firebase/firebase-auth.js';
import { HeaderRetroceder } from './Header_retro.js';
import { Post } from './Post.js';
import { traerMisPost, getUserData } from '../firebase/firebase-data.js';
import { Menu, MenuList, ProfileList } from './Menu.js';
import { ModalCerrarSesion } from './Modal_cerrarSesion.js';

import { ModalCreatePost } from './ModalCreatePost.js';
import { ModalEditPost } from './ModalEditPost.js';

export function MiMuro() {
  // Cerrar Sesion
  const { modalCerrarSesion, abrilModalCerrarSesion } = ModalCerrarSesion();
  // Crea un Post
  const { modalCreatePost, abrirModalCreatePost } = ModalCreatePost();

  // Edita un post
  const {
    modalContenedor,
  // abrirModal, cerrarModal, setPost,
  } = ModalEditPost();

  const { menuModalPlus, toggleModalPlus } = MenuList(abrirModalCreatePost);
  // Perfil usuario

  const { menuModalProfile, toggleModalProfile } = ProfileList(
    abrilModalCerrarSesion,
  );

  // Enviamos los eventos a Menu
  const menu = Menu(toggleModalPlus, toggleModalProfile);

  // -----------------------------------------------------------------------------------

  const user = auth.currentUser;

  const contenedorMuro = document.createElement('div');

  const header = HeaderRetroceder();

  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo__container', 'perfil');
  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement('div');
  imgAvatarContainer.classList.add('photo__avatar-container');
  const photoAvatar = document.createElement('img');
  photoAvatar.classList.add('photo__avatar-img');
  //   photoAvatar.src = "photoURL";
  photoAvatar.src = '{user.photoURL}';
  // photoAvatar.src = "../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg";
  photoAvatar.alt = 'imgAvatar';

  const nombre = document.createElement('h1');
  nombre.classList.add('userNameTitle');
  nombre.textContent = '{user.displayName}';

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

  buttonAddPost.addEventListener('click', () => {
    abrirModalCreatePost();
  });

  imgAvatarContainer.append(photoAvatar);
  photoContainer.append(imgAvatarContainer);
  photoContainer.append(nombre);
  photoContainer.append(buttonAddPost);

  const opcionesMuro = document.createElement('div');
  opcionesMuro.classList.add('opcionesMuro__container');
  const publicaciones = document.createElement('a');
  publicaciones.textContent = 'Publicaciones';
  publicaciones.style.fontWeight = '700';
  const reseñas = document.createElement('a');
  reseñas.textContent = 'Reseñas';
  const editarPerfil = document.createElement('a');
  editarPerfil.textContent = 'Editar Perfil';
  editarPerfil.addEventListener('click', () => {
    window.location.hash = '#/profile';
  });

  opcionesMuro.append(publicaciones);
  // opcionesMuro.append(reseñas);
  opcionesMuro.append(editarPerfil);

  const misPostsContainer = document.createElement('div');
  misPostsContainer.classList.add('notification-grid', 'perfil');
  // mientras cargan post, al postsContainer le hago append de un loader
  misPostsContainer.textContent = 'Cargando posts...';

  traerMisPost(user.uid)
    .then((postsLista) => {
      // una vez que tengo la lista le quito el loader
      misPostsContainer.textContent = '';
      // lleno el postContainer con los nodos de post
      if (postsLista.length === 0) {
        misPostsContainer.textContent = 'No hay post creados';
      } else {
        postsLista.forEach((post) => {
          const postComponent = Post(post);
          misPostsContainer.append(postComponent);
        });
      }
    })
    .catch(() => {
      misPostsContainer.textContent = 'No hay post...';

      // mostrar mensaje de que no se pudo cargar los posts
    });

  getUserData(user.uid)
    .then((u) => {
      photoAvatar.src = u.user_photo;
      nombre.textContent = `${u.user_name}`;
    });

  contenedorMuro.append(header);
  contenedorMuro.append(photoContainer);
  contenedorMuro.append(opcionesMuro);
  contenedorMuro.append(misPostsContainer);
  contenedorMuro.append(menuModalPlus);
  contenedorMuro.append(menuModalProfile);
  contenedorMuro.append(menu);
  contenedorMuro.append(modalCreatePost);
  contenedorMuro.append(modalContenedor);
  contenedorMuro.append(modalCerrarSesion);

  return contenedorMuro;
}
