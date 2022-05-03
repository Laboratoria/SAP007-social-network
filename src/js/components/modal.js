let modalContainer = '';

function toogle(e) {
  e.preventDefault();
  modalContainer.classList.toggle('active');
}

function outside(e) {
  if (e.target === this) { // alvo é igual o evento?
    e.preventDefault();
    modalContainer.classList.toggle('active');
  }
}

export function initModal(open, container, close) {
  modalContainer = container;
  const closeMenu  = document.querySelector('.modal-dropdown');
  if (open && close && container) {
    open.addEventListener('click', toogle);
    close.addEventListener('click', toogle);
    container.addEventListener('click', outside);
    closeMenu.addEventListener('click', outside)

    open.addEventListener('touchstart', toogle);
    close.addEventListener('touchstart', toogle);
    container.addEventListener('touchstart', outside);
  }
}

export function closeModalAutomatically(modalClose, container) {
  modalContainer = container;
  const event = new Event('click');
  modalClose.addEventListener('click', toogle, false);
  modalClose.addEventListener('touchstart', toogle, false);
  modalClose.dispatchEvent(event);
}
