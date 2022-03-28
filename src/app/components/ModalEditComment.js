/* eslint-disable no-use-before-define */
import { updateCom } from '../firebase/firebase-data.js';

export const ModalEditCom = () => {
  // * modalContenedor es el overlay
  const modalContenedor = document.createElement('div');
  modalContenedor.classList.add('modal__contenedor');
  modalContenedor.classList.add('modal-cerrar');

  //  * Contenedor de toda la información
  const formCom = document.createElement('div');
  formCom.classList.add('formPost-edit');

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
  // opcion Guardar
  const guardar = document.createElement('h1');
  guardar.classList.add('formPost_h1');
  guardar.textContent = 'Guardar';

  opcionesCabecera.append(cerrarContainer);
  opcionesCabecera.append(guardar);

  // Titulo del Modal
  const title = document.createElement('h2');
  title.classList.add('formPost_h2');
  title.textContent = 'Editar comentario';

  header.append(opcionesCabecera);
  header.append(title);

  const inputsContainer = document.createElement('div');
  inputsContainer.classList.add('formPost_inputs');

  const com = document.createElement('textarea');
  com.classList.add('formPost_input-long');
  com.placeholder = 'Escribe un comentario...';

  inputsContainer.append(com);

  const tags = document.createElement('input');
  tags.classList.add('formPost_input-short');
  tags.placeholder = 'Añadir etiquetas';
  // inputsContainer.append(tags);

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

  formCom.append(header);
  formCom.append(inputsContainer);
  // formPost.append(btnsContainer);

  modalContenedor.append(formCom);

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

  // Evento para guardar post (update en firebase)
  guardar.addEventListener('click', () => {
    // limpiar modal antes de cerrar
    com.value = '';
    // eliminar event listeners a cualquier nodo o elemeno
    guardar.removeEventListener('click', guardarButtonClickListener);

    modalContenedor.style.opacity = '0';
    modalContenedor.style.visibility = 'hidden';
  });

  const setCom = (comData, postId) => {
    com.value = `${comData.message}`;

    guardarButtonClickListener = () => {
      // const nuevoMensaje = document.getElementById("msgPost").value;
      const nuevoMensaje = com.value;
      // Actualiza el Post
      updateCom(postId, comData.com_id, nuevoMensaje).then(() => {
        window.location.hash = '#/';
      });
    };
    // Evento para guardar post (update en firebase)
    guardar.addEventListener('click', guardarButtonClickListener);
  };

  return {
    modalContenedor, abrirModal, cerrarModal, setCom,
  };
};
