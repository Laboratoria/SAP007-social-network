export const login = () => {
  const loginCreate = document.createElement('div');
  const templateLogin = `
    <main class="home-container">
    <form id="loginForm" class="form gridItem">
      <h2>Login</h2>
      <input
        class="inputNames"
        type="text"
        id="loginEmail"
        placeholder="Email"
        required
      />
      <input
        class="inputNames"
        type="password"
        id="loginPassword"
        placeholder="Senha"
        required
      />
      <button id="entrar_login" class="buttonLogin" type="submit" role="link">
        Entrar
      </button>
      <p>Esqueci a <a href="">Senha</a></p>
      <p>Ou entrar com o Google</p>
      <button class="buttonGoogle" type="button" id="buttonGoogle">
        <img class="buttonGoogle__img" src="" alt="Imagen logo de Google" />
      </button>
    </form>
    <p>Ainda não tem conta? <a href="#register">Cadastre-se</a></p>
    <a href="#home">Voltar a tela inicial</a>
  </main>
  `;

  loginCreate.innerHTML = templateLogin;
  return loginCreate;
};


/*
 Mensagem de erro 
 <spam class="displayNone" id="loginEmailInvalido">Este email não esta registrado</spam>
<spam class="displayNone" id="loginEmailNull">Entre com email válido</spam>
 <spam class="displayNone" id="loginSenhaInvalida">Senha inválida</spam>
 */