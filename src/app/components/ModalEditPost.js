/* eslint-disable no-use-before-define */
import { updatePost } from '../firebase/firebase-data.js';
import { uploadImage } from '../firebase/firebase-storage.js';

export const ModalEditPost = () => {
  // * modalContenedor es el overlay
  const modalContenedor = document.createElement('div');
  modalContenedor.classList.add('modal__contenedor');
  modalContenedor.classList.add('modal-cerrar');

  //  * Contenedor de toda la información
  const formPost = document.createElement('div');
  formPost.classList.add('formPost-edit');

  // * Cabecera
  const header = document.createElement('div');
  header.classList.add('modal__cabecera');

  // Opciones de Cabecera
  const opcionesCabecera = document.createElement('div');
  // opcionesCabecera.classList.add('modal__opcionesCabecera');
  opcionesCabecera.classList.add('modal__opcionesCabecera--multiple');

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

  // Opcion Guardar
  const guardar = document.createElement('h1');
  guardar.classList.add('formPost_h1');
  guardar.textContent = 'Guardar';

  opcionesCabecera.append(cerrarContainer);
  opcionesCabecera.append(guardar);

  // Titulo del Modal
  const title = document.createElement('h2');
  title.classList.add('formPost_h2');
  title.textContent = 'Editar publicación';

  header.append(opcionesCabecera);
  header.append(title);

  // Formulario
  const inputsContainer = document.createElement('div');
  inputsContainer.classList.add('formPost_inputs');

  // Text Area
  const post = document.createElement('textarea');
  post.classList.add('formPost_input-long');
  post.placeholder = '¿Qué estas pensando?';
  // Tags
  const tags = document.createElement('input');
  tags.classList.add('formPost_input-short');
  tags.placeholder = 'Añadir etiquetas';
  // inputsContainer.append(tags);

  // InputFile de la Imagen
  const pictureContainerEdit = document.createElement('div');
  pictureContainerEdit.classList.add('formPost_input-short', 'iconImg_rigth');
  const pictureEdit = document.createElement('input');
  pictureEdit.id = 'fileEdit';
  pictureEdit.type = 'file';
  pictureEdit.accept = 'image/*';
  // Label dentro del inputFie
  const pictureLabel = document.createElement('label');
  pictureLabel.setAttribute('for', 'fileEdit');
  pictureLabel.classList.add('modal__fileInput');

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
  const imagenFileEdit = document.createElement('img');
  imagenFileEdit.classList.add('imagenFile');

  // Eliminar imagen del contenedor
  removeImageButton.addEventListener('click', () => {
    postImageFile = null;
    pictureEdit.value = null;
    imagenFileEdit.removeAttribute('src');
    changeImageInputLabelText(pictureLabel, 'Añadir Imagen');
  });

  // Cambia el texto del input file
  function changeImageInputLabelText(label, text) {
    pictureLabel.textContent = text;
    const iconPicture = document.createElement('span');
    iconPicture.classList.add('icon-addimg');
    iconPicture.classList.add('card__icon');
    pictureLabel.append(iconPicture);
  }
  let postImageFile;
  // Escuchar cuando cambie el input file
  pictureEdit.addEventListener('change', (e) => {
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = e.target.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
      imagenFileEdit.removeAttribute('src');
      return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    postImageFile = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(postImageFile);
    // Y a la fuente de la imagen le ponemos el objectURL
    imagenFileEdit.src = objectURL;
    changeImageInputLabelText(pictureLabel, postImageFile.name);
  });

  // construye el file
  pictureContainerEdit.append(pictureLabel);
  pictureContainerEdit.append(pictureEdit);
  // Construye el contenedor de la imagen
  imageFileContainer.append(imagenFileEdit);
  imageFileContainer.append(removeImageButton);
  /// ///////////////////////
  inputsContainer.append(post);
  inputsContainer.append(pictureContainerEdit);
  inputsContainer.append(imageFileContainer);
  /// /////////////////////////

  const btnsContainer = document.createElement('div');
  btnsContainer.classList.add('formPost_btns');

  /// ////////////////////////////////////////////

  const tagBtn = document.createElement('button');
  tagBtn.classList.add('formPost_button');
  btnsContainer.append(tagBtn);

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

  formPost.append(header);
  formPost.append(inputsContainer);
  // formPost.append(btnsContainer);

  modalContenedor.append(formPost);

  // Modal oculto
  modalContenedor.style.opacity = '0';
  modalContenedor.style.visibility = 'hidden';

  let guardarButtonClickListener;

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

  const setPost = (postData) => {
    post.value = `${postData.message}`;
    let label = '';
    if (postData.imageUrl) {
      imagenFileEdit.src = postData.imageUrl;
      label = 'Cambiar Imagen';
    } else {
      imagenFileEdit.removeAttribute('src');
      label = 'Añadir imagen';
    }

    changeImageInputLabelText(pictureLabel, label);

    if (guardarButtonClickListener) {
      guardar.removeEventListener('click', guardarButtonClickListener);
    }
    guardarButtonClickListener = async () => {
      const nuevoMensaje = post.value;
      // Actualiza el Post
      let nuevaImageUrl = '';

      if (postImageFile) {
        nuevaImageUrl = await uploadImage(postImageFile, postData.id_user);
      } else if (imagenFileEdit.src) {
        nuevaImageUrl = imagenFileEdit.src;
      }

      await updatePost(postData.post_id, { message: nuevoMensaje, imageUrl: nuevaImageUrl });
      // window.location.hash = "#/";
      cerrarModal();
    };

    // Evento para guardar post (update en firebase)
    guardar.addEventListener('click', guardarButtonClickListener);
  };

  return {
    modalContenedor, abrirModal, cerrarModal, setPost,
  };
};
