export default function Register() {
    const register = document.createElement("div");
    register.innerHTML = `
        <main class="box">
            <div class="container">
              <div class="banner">
                  <div class="title-container">
                      <img class="logo" src="../../img/logo.png" alt="Logo"/>
                      <h3 class="inf">CADASTRO</h3>
                  </div>
              </div>
             
              <section>
                  <form class="form">
                      <input class="input" id="name" type="name" autocomplete="on" placeholder="Nome Completo" required/>
                      <input class="input" id="email" type="email" autocomplete="on" placeholder="E-mail" required/>                    
                      <input class="input" id="password" type="password" autocomplete="on" placeholder="Senha" required/>
                      <p id="email-error" class="error-message font-work"></p>
                  </form>
                  <button id="signup-button-register" class="buttons register-button">Cadastrar-se</button>
                  <button id="gobackButton" class="goback-button">
                      <img src="./img/arrow.png" class="seta" alt="Ícone de Seta" width="50" height="50"> 
                  </button>
              </section>
            </div>
        </main>
        
      `;
    return register;
}