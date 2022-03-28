export default function Login() {
  const login = document.createElement("div");
  login.innerHTML = `   
   
        <main class="box">
            <div class="container">
    
                <div class="banner">
                    <div class="title-container">
                        <img class="logo" src="../../img/logo.png" alt="Logo" />
                        <h3 class="inf">LOGIN</h3>
                    </div>
                </div>
                
                <section>
                    <form class="form">
                    <input class="input" id="email" type="email" autocomplete="on" placeholder="E-mail" required>
                    <input class="input" id="password" type="password" autocomplete="on" placeholder="Senha" required>
                    <p id="loginError" class="error-message font-work"></p>
                    </form>
    
                    <div class="signin">
                    <button id="signin-button" class="signin-button buttons">Entrar</button>
                    <p class="option"> OU </p>
                    </div>
    
                </section>
    
                <button id="google-button" class="google-button buttons">
                  <img class="google-icon-btn" src="../../img/google.png" alt="Ícone do Google"/>
                  Entrar com Conta Google
              </button>
    
                <button id="signup-button" class="signup-button buttons"> Não possui cadastro? <span>Clique aqui</span> </button>
            </div>
        </main>
        
        `;

  return login;
}
