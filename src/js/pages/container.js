//modal para post - post fica invisível --> criar outra função
if (modalOpen && modalClose && modalContainer) {
  const emailResetPassword = container.querySelector("#user-email-reset");
  const toogle = function (e) {
    e.preventDefault();
    emailResetPassword.value = "";
    messageReset.innerHTML = "";
    modalContainer.classList.toggle("active");
  };
  const outside = function (e) {
    if (e.target === this) {
      e.preventDefault();
      emailResetPassword.value = "";
      messageReset.innerHTML = "";
      modalContainer.classList.toggle("active");
    }
  };
  modalOpen.addEventListener("click", toogle);
  modalClose.addEventListener("click", toogle);
  modalContainer.addEventListener("click", outside);
}

//mudar essa função para o header
const buttonLogout = container.querySelector("#button-logout");
buttonLogout.addEventListener("click", (e) => {
  e.preventDefault();
  logout().then(() => {
    window.location.hash = "#login";
  });
});
