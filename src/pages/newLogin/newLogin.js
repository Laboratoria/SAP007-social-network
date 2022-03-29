// function login(email, password) {
//     document.getElementById("create-login").innerHTML = `
//     <img src="" alt=""> //imagem lab com coração
//     <label for="email-entrance"> <input type="email" class="email-entrance" id="email-entrance" required placeholder="exemple@domain.com"> Email</label>
//     <label for="pasword-entrance"> <input type="pasword" class="pasword-entrance"  required placeholder="******"> Pasword </label>
//     <input type="submit" id="email-entrance">
//     <a href="link de esqueceu a senha">Forgot password?</a>     
//     <a href="link do login já existente">Don't have an account? Create one now!</a>
//     <input type="submit" class="submit" value="Send Request" >
// `;
//     return login(email, password)
// }



alert("Olá mundo!")
    const container = document.createElement("div");
    container.classList.add("content-login")

    const templateLogin = `
    <img class="logo-site" src="img/logo-eu-poesia-r.png">
    <form class="form-login">
      <a href="#register" class="link-register">Registre-se</a>
      <input type="email" id="input-email" class="input-email" placeholder="E-mail">
      <input type="password" id="input-password" class="input-email" placeholder="Senha">
      <div class="checkbox">
        <input type="checkbox" id="remember-password" class="remember-password" name="remember-password">
        <label for="remember-password">Lembrar senha</label>
        <a href="#forgot-password" class="link-forgot-password">Esqueci a senha</a>
      </div>
      <span id="message-error" class="message-error"></span>
      <button type="button" id="button-login" class="button-login">Login</button>
    </form>
    <footer class="footer">
      <p class="footer-text">Desenvolvido por <br> Beatriz de Sousa Carvalho, Maria Luiza Costa Santana e Raele Pereira
      </p>
    `;

    container.innerHTML = templateLogin;