export function termosEPolitica() {
  const termosContainer = document.createElement("div");
  termosContainer.classList.add("modal__contenedor");

  const modalCerrar = document.createElement("div");
  modalCerrar.classList.add("modal", "modal-cerrar");

  const cerrar = document.createElement("p");
  cerrar.classList.add("cerrar");
  cerrar.textContent = "Sair";

  const modaltexto = document.createElement("div");
  modaltexto.classList.add("modal-textos");

  const Titulo = document.createElement("h2");
  Titulo.classList.add("modal-titulo");
  Titulo.textContent = "Termos e Condições";

  const contenedorMensaje = document.createElement("div");
  contenedorMensaje.classList.add("container-mensagem-termos");
  const mensaje = document.createElement("p");
  mensaje.textContent =
    "A presente Política de Privacidade estabelece os termos em que a GIRRRL TALK usa e protege as informações que são fornecidas pelos seus usuários no momento de usar o aplicativo. Esta empresa está comprometida com a segurança dos dados de seus usuários. Quando lhe pedimos para preencher os campos de informações pessoais com as quais possa ser identificado, nós o fazemos assegurando que só serão utilizadas de acordo com os termos deste documento. No entanto, esta Política de Privacidade pode mudar com o tempo ou ser atualizado para que nós recomendamos e enfatizamos a revisão contínua deste app para se certificar de que você concorda com essas alterações.";

  termosContainer.append(modalCerrar);
  modalCerrar.append(modaltexto);
  modaltexto.append(Titulo);
  contenedorMensaje.append(mensaje);
  modaltexto.append(contenedorMensaje);
  modaltexto.append(cerrar);

  termosContainer.style.opacity = "0";
  termosContainer.style.visibility = "hidden";

  const abrirModal = () => {
    termosContainer.style.opacity = "1";
    termosContainer.style.visibility = "visible";
    modalCerrar.classList.toggle("modal-cerrar");
  };

  const cerrarModal = () => {
    modalCerrar.classList.toggle("modal-cerrar");
    setTimeout(() => {
      termosContainer.style.opacity = "0";
      termosContainer.style.visibility = "hidden";
    }, 900);
  };

  cerrar.addEventListener("click", cerrarModal);

  return {
    termosContainer,
    abrirModal,
    cerrarModal,
  };
}
