export function initDropdownMenu(open, container) {
  if (open && close && container) {
    const toogle = function (e) {
      e.preventDefault();
      container.classList.toggle("active");
    };
    const outside = function (e) {
      if (e.target === this) {
        e.preventDefault();
        container.classList.toggle("active");
      }
    };
    open.addEventListener("click", toogle);
    container.addEventListener("click", outside);
  }
}
