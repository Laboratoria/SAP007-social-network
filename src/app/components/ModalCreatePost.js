/* eslint-disable no-use-before-define */
import { addPost, updatePost } from '../firebase/firebase-data.js';
import { auth } from '../firebase/firebase-auth.js';
import { uploadImage } from '../firebase/firebase-storage.js';
import { Loader } from '../view-controller/Loader.js';

export const ModalCreatePost = () => {
  // * modalContenedor es el overlay
  const modalContenedor = document.createElement('div');
  modalContenedor.classList.add('modal__contenedor');
  modalContenedor.classList.add('modal-cerrar');

  // Contenedor de post
  const formPost = document.createElement('form');
  formPost.classList.add('formPost');

  // * Cabecera
  const header = document.createElement('div');
  header.classList.add('modal__cabecera');

  // Opciones de Cabecera
  const opcionesCabecera = document.createElement('div');
  opcionesCabecera.classList.add('modal__opcionesCabecera');

  // Opcion Cerrar
  const cerrarContainer = document.createElement('div');
  cerrarContainer.classList.add('card__icon-container');
  cerrarContainer.addEventListener('click', () => {
    cerrarModal();
  });
  const iconClose = document.createElement('span');
  iconClose.classList.add('card__icon', 'close__icon');
  iconClose.classList.add('icon-icon-close');
  cerrarContainer.appendChild(iconClose);

  opcionesCabecera.append(cerrarContainer);

  // Titulo del Modal
  const title = document.createElement('h2');
  title.classList.add('formPost_h2');
  title.textContent = 'Crear publicación';
  header.append(opcionesCabecera);
  header.append(title);

  // Formulario de los Input del Post
  const inputsContainer = document.createElement('div');
  inputsContainer.classList.add('formPost_inputs');
  // Text Area
  const post = document.createElement('textarea');
  post.id = 'msgPostForm';
  post.classList.add('formPost_input-long');
  post.placeholder = '¿Qué estas pensando?';
  // Tags
  const tags = document.createElement('input');
  tags.classList.add('formPost_input-short');
  tags.placeholder = 'Añadir etiquetas';

  // Input de la Imagen
  const pictureInputDiv = document.createElement('div');
  pictureInputDiv.classList.add('formPost_input-short', 'iconImg_rigth');
  const picture = document.createElement('input');
  picture.id = 'file';
  picture.type = 'file';
  picture.accept = 'image/*';
  // label del inputFile
  const pictureLabel = document.createElement('label');
  pictureLabel.setAttribute('for', 'file');
  pictureLabel.classList.add('modal__fileInput');
  changeImageInputLabelText(pictureLabel, 'Añadir Imagen');
  // Contenedor de la imagen
  const imageFileContainer = document.createElement('div');
  imageFileContainer.classList.add('imagenFileContainer');
  // Remover imagen
  const removeImageButton = document.createElement('div');
  removeImageButton.classList.add('removeImageButton');
  const CloseIcon = document.createElement('div');
  CloseIcon.classList.add('icon-icon-close', 'modal__close');
  removeImageButton.append(CloseIcon);
  // Imagen
  const imagenFile = document.createElement('img');
  imagenFile.classList.add('imagenFile');

  let postImageFile;

  // Cambia el texto del input file
  function changeImageInputLabelText(label, text) {
    pictureLabel.textContent = text;
    const iconPicture = document.createElement('span');
    iconPicture.classList.add('icon-addimg');
    iconPicture.classList.add('card__icon');
    pictureLabel.append(iconPicture);
  }

  // Eliminar imagen del contenedor
  removeImageButton.addEventListener('click', () => {
    postImageFile = null;
    picture.value = null;
    imagenFile.removeAttribute('src');
    changeImageInputLabelText(pictureLabel, 'Añadir Imagen');
  });

  // Escuchar cuando cambie el input file
  picture.addEventListener('change', () => {
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = picture.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
      imagenFile.removeAttribute('src');
      return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    postImageFile = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(postImageFile);
    // Y a la fuente de la imagen le ponemos el objectURL
    imagenFile.src = objectURL;
    changeImageInputLabelText(pictureLabel, postImageFile.name);
  });

  // Contruye InputFile
  pictureInputDiv.append(pictureLabel);
  pictureInputDiv.append(picture);
  // Construye el contenedor de la imagen
  imageFileContainer.append(imagenFile);
  imageFileContainer.append(removeImageButton);
  // Contruye los inputs del Formulario
  inputsContainer.append(post);
  // inputsContainer.append(tags);
  inputsContainer.append(pictureInputDiv);
  inputsContainer.append(imageFileContainer);

  // Contenedor del mensaje de Error
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('err-container', 'center');
  const msgError = document.createElement('small');
  msgError.classList.add('error-msg');
  msgError.id = 'errorCrearPost';
  msgError.textContent = '';
  errorContainer.append(msgError);

  // Contenedor de Botones
  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('formPost_btns');

  // Boton de Tags
  const tagBtn = document.createElement('button');
  tagBtn.classList.add('formPost_button');
  const tagBtnDiv = document.createElement('div');
  tagBtnDiv.classList.add('btnContent');
  tagBtn.append(tagBtnDiv);
  const iconTag = document.createElement('span');
  iconTag.classList.add('icon-plus2');
  iconTag.classList.add('btnIconsTag');
  tagBtnDiv.append(iconTag);
  const textTag = document.createElement('span');
  textTag.classList.add('tagTextSpan');
  textTag.textContent = 'Etiquetas';
  tagBtnDiv.append(textTag);

  // Boton Publicacion
  const postBtn = document.createElement('button');
  postBtn.id = 'sendPost';
  postBtn.classList.add('formPost_button');

  // btnsContainer.append(tagBtn);
  btnsContainer.append(postBtn);

  // Anade funcionalidad al boton Publicar y valida campos vacios
  postBtn.addEventListener('click', async () => {
    const mensajeError = document.getElementById('errorCrearPost');
    const formPostMsg = document.getElementById('msgPostForm').value;
    if (formPostMsg === '') {
      mensajeError.textContent = 'completar campos *';
    } else {
      const loader = Loader();
      modalContenedor.textContent = '';
      modalContenedor.appendChild(loader);
      // anadir loader mientras sube imagen
      const postDocRef = await addPost(formPostMsg);

      if (postImageFile) {
        const newPostId = postDocRef.id;
        const user = auth.currentUser;
        const downloadUrl = await uploadImage(postImageFile, user.uid);
        await updatePost(newPostId, {
          message: formPostMsg,
          imageUrl: downloadUrl,
        });
      }

      cerrarModal();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  });

  // Crea el icono del Boton Publicar
  const postBtnDiv = document.createElement('div');
  postBtnDiv.classList.add('btnContent');
  // postBtn.append(postBtnDiv);

  const btnContent = document.createElement('div');
  // btnContent.classList.add('button__content')
  btnContent.classList.add('button__content');

  const iconSend = document.createElement('span');
  iconSend.classList.add('icon-send');
  iconSend.classList.add('btnIconsPost');

  const textPost = document.createElement('span');
  textPost.classList.add('postTextSpan');
  textPost.textContent = 'Publicar';

  btnContent.append(iconSend);
  btnContent.append(textPost);
  postBtn.append(btnContent);

  // postBtnDiv.append(iconSend);
  // postBtnDiv.append(textPost);

  btnContent.append(textPost);

  // Contruye el Modal Crear Post
  formPost.append(header);
  formPost.append(inputsContainer);
  formPost.append(errorContainer);
  formPost.append(btnsContainer);

  modalContenedor.append(formPost);
  // Modal oculto
  modalContenedor.style.opacity = '0';
  modalContenedor.style.visibility = 'hidden';

  // Funciones del Modal
  const abrirModal = () => {
    modalContenedor.style.opacity = '1';
    modalContenedor.style.visibility = 'visible';
    modalContenedor.classList.toggle('modal-cerrar');
  };
  const removerImagen = () => {
    postImageFile = null;
    picture.value = null;
    pictureLabel.textContent = 'Añadir imagen';
    imagenFile.removeAttribute('src');
  };
  const limpiarInputs = () => {
    removerImagen();
    post.value = '';
  };

  const cerrarModal = () => {
    limpiarInputs();
    modalContenedor.classList.toggle('modal-cerrar');
    modalContenedor.style.opacity = '0';
    modalContenedor.style.visibility = 'hidden';
  };

  return {
    modalCreatePost: modalContenedor,
    abrirModalCreatePost: abrirModal,
  };
};
