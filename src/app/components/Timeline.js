import { Bienvenida } from './Bienvenida.js';
import { Post } from './Post.js';
import { ModalCreatePost } from './ModalCreatePost.js';
import { ModalEditPost } from './ModalEditPost.js';
import { ModalEliminarPost } from './ModalDeletePost.js';
import { Menu, MenuList, ProfileList } from './Menu.js';
import { traerPost } from '../firebase/firebase-data.js';
import { HeaderSimple } from './Header_simple.js';
import { ModalCerrarSesion } from './Modal_cerrarSesion.js';
import { ModalEliminarCom } from './ModalDeleteComment.js';
import { ModalEditCom } from './ModalEditComment.js';
import { auth } from '../firebase/firebase-auth.js';

// import { ModalEditPost } from './Edit_post.js'
// import { ModalCerrarSesion } from "./Modal_cerrar.js";

export function Timeline() {
  const timeline = document.createElement('div');
  timeline.classList.add('timeline');
  // Importamos la cabecera
  const header = HeaderSimple();
  // Contenedor de las publicaciones
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('notification-grid');

  // Cerrar Sesion
  const { modalCerrarSesion, abrilModalCerrarSesion } = ModalCerrarSesion();
  const { modalCreatePost, abrirModalCreatePost } = ModalCreatePost();
  // Crea un Post
  const { menuModalPlus, toggleModalPlus } = MenuList(abrirModalCreatePost);
  // Perfil usuario
  const { menuModalProfile, toggleModalProfile } = ProfileList(
    abrilModalCerrarSesion,
  );
  // Importamos la Bienvenida al usuario
  const user = auth.currentUser;
  const bienvenidaUser = Bienvenida(abrirModalCreatePost, user);
  // Enviamos los eventos a Menu
  const menu = Menu(toggleModalPlus, toggleModalProfile);

  // -----------------------------------------------------------------------------------
  // Lista desplegable de opciones de post EDITAR ELIMINAR POST
  // -----------------------------------------------------------------------------------
  const {
    modalContenedor: modalEditPost,
    abrirModal: abrirModalEdit,
    setPost: setDataModalEdit,
  } = ModalEditPost();

  const {
    modalEliminarPost: modalRemovePost,
    abrirModalEliminar: abrirModalRemove,
    setDataModalRemove,
  } = ModalEliminarPost();

  // -----------------------------------------------------------------------------------
  // Lista desplegable de opciones de comentario EDITAR ELIMINAR COMENTARIO
  // -----------------------------------------------------------------------------------
  const {
    modalEliminarCom: modalRemoveCom,
    abrirModalEliminarCom: abrirModalRemoveCom,
    setDataModalRemoveCom,
  } = ModalEliminarCom();

  const {
    modalContenedor: modalEditCom,
    abrirModal: abrirModalEditCom,
    setCom: setDataModalEditCom,
  } = ModalEditCom();

  // -----------------------------------------------------------------------------------
  // Construye el TIMELINE
  // -----------------------------------------------------------------------------------
  timeline.append(header);
  timeline.append(bienvenidaUser);
  timeline.append(postsContainer);
  timeline.append(menuModalPlus);
  timeline.append(menuModalProfile);
  timeline.append(menu);
  timeline.append(modalCreatePost);
  timeline.append(modalEditPost);
  timeline.append(modalRemovePost);
  timeline.append(modalEditCom);
  timeline.append(modalRemoveCom);
  timeline.append(modalCerrarSesion);

  // cosas que pasan asincronamente

  // mientras cargan post, al postsContainer le hago append de un loader
  postsContainer.textContent = 'Cargando posts...';

  traerPost()
    .then((postsLista) => {
      // una vez que tengo la lista le quito el loader
      postsContainer.textContent = '';
      // lleno el postContainer con los nodos de post
      postsLista.forEach((post) => {
        const postComponent = Post(
          post,
          setDataModalEdit,
          abrirModalEdit,
          setDataModalRemove,
          abrirModalRemove,
          abrirModalRemoveCom,
          setDataModalRemoveCom,
          abrirModalEditCom,
          setDataModalEditCom,
        );
        postsContainer.append(postComponent);
      });
    })
    .catch(() => {
      // mostrar mensaje de que no se pudo cargar los posts
      postsContainer.textContent = 'No hay posts';
    });

  return timeline;
}

// en vez de devolver timeline, devuelve Promise que en el then devuelve timeline
// Timeline() // cuando es async retorna es una promesa pendiente
// Timeline().then((timeline) => {})
