export const feedWithoutUser = () => {
  const messageWithoutLogin = document.createElement('div');
  messageWithoutLogin.setAttribute('class', 'message-without-user flex column');
  messageWithoutLogin.innerHTML = `
    <picture>
      <img class="logo-img-feed-user-message" src="../../img/kfandomKF.svg" alt="Logo">
    </picture>
    <p class="without-user">Tente fazer o login para ver o feed!</p>
    <p class="without-user">
      <button class="link-login-button" id="btn-redirect-login"> Me redirecione para o login!</button>
    </p>
    `;
  const btnRedirect = messageWithoutLogin.querySelector('#btn-redirect-login');
  btnRedirect.addEventListener('click', () => {
    window.location.hash = '#login';
    document.location.reload(true);
  });
  return messageWithoutLogin;
};
