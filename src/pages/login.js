import "../lib/config-firebase.js";
//import { signinPassword, googleLogin } from '../lib/auth.js';

export default () => {
  const containerLogin = document.createElement('div')

  const templateLogin = `
    <p class="paragrafoLogin">Login</p>
    <input type="email" name="email" class="email-input input-users" placeholder="Insera seu e-mail" required /><br>
    <input type="password" name="password" class="password-input input-users" placeholder="Insera uma senha" requerid /><br>
  <a href="" > <p class='reset-password'>Esqueceu a sua senha?</p></a><br>
  <br><button class='btn-submit' type="submit">Entrar</button><br>
  <button class="btn-google">Entrar com o Google
  </button><br>
  `;

containerLogin.innerHTML = templateLogin;

return containerLogin;
  }