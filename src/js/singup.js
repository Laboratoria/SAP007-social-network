import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const singUp = document.getElementById('main-singup');
singUp.innerHTML = `
  <div>
    <h2>Criar uma conta:</h2>
    <form>
      <input type="text" placeholder="Nome">
      <br>
      <input type="text" placeholder="Sobrenome">
      <br>
      <input type="email" placeholder="Endereço de e-mail">
      <br>
      <input type="password" placeholder="Digite uma senha">
      <br>
      <input type="password" placeholder="Confirme a senha">
      <br>
      <input type="submit" value="Cadastrar">
    </form>
  </div>
`;
