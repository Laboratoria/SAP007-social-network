export function initModal(modalOpen, modalClose, modalContainer) {
  if (modalOpen && modalClose && modalContainer) {
    const toogle = function (e) {
      e.preventDefault();
      modalContainer.classList.toggle("active");
    };
    const outside = function (e) {
      if (e.target === this) {
        e.preventDefault();
        modalContainer.classList.toggle("active");
      }
    };
    modalOpen.addEventListener("click", toogle);
    modalClose.addEventListener("click", toogle);
    modalContainer.addEventListener("click", outside);
  }
}
