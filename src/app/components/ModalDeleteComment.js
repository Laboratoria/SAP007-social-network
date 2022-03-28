import { deleteCom } from '../firebase/firebase-data.js';

export function ModalEliminarCom() {
  const modalContenedor = document.createElement('div');
  modalContenedor.classList.add('modal__contenedor');

  const modalCerrar = document.createElement('div');
  modalCerrar.classList.add('modalCerrarSesion', 'modal-cerrar');

  const modaltexto = document.createElement('div');
  modaltexto.classList.add('modal-textos');

  const Titulo = document.createElement('h2');
  Titulo.classList.add('modal-titulo');
  Titulo.textContent = '¿Estás seguro de eliminar?';

  const botonAceptar = document.createElement('div');
  botonAceptar.classList.add('modal__p-cerrarS');
  const mensaje = document.createElement('p');
  mensaje.textContent = 'Aceptar';

  const cerrar = document.createElement('p');
  cerrar.classList.add('modal__p-cancelar');
  cerrar.textContent = 'Cancelar';

  modalContenedor.append(modalCerrar);
  modalCerrar.append(modaltexto);
  modaltexto.append(Titulo);
  botonAceptar.append(mensaje);
  modaltexto.append(botonAceptar);
  modaltexto.append(cerrar);

  modalContenedor.style.opacity = '0';
  modalContenedor.style.visibility = 'hidden';

  let cerrarButtonClickListener;

  const abrirModal = () => {
    modalContenedor.style.opacity = '1';
    modalContenedor.style.visibility = 'visible';
    modalCerrar.classList.toggle('modal-cerrar');
  };

  const cerrarModal = () => {
    modalCerrar.classList.toggle('modal-cerrar');
    // eliminar event listeners a cualquier nodo o elemeno
    cerrar.removeEventListener('click', cerrarButtonClickListener);
    modalContenedor.style.opacity = '0';
    modalContenedor.style.visibility = 'hidden';
  };

  const setDataModalRemove = (/* comData */postId, comId) => {
    cerrar.addEventListener('click', cerrarModal);
    cerrarButtonClickListener = () => {
      deleteCom(/* comData.com_id */postId, comId).then(() => { /* revisar ruta */
        // cerrarModal();
        window.location.hash = '#/';
      });
    };
    botonAceptar.addEventListener('click', cerrarButtonClickListener);
  };

  return {
    modalEliminarCom: modalContenedor,
    abrirModalEliminarCom: abrirModal,
    cerrarModalEliminarCom: cerrarModal,
    setDataModalRemoveCom: setDataModalRemove,
  };
}
