import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { db } from '../dependencies/config-firebase.js';
import { collection, getDocs, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

// async function getDoBanco() {
//   const collectionPost = collection(db, 'posts');
//   const postSnapshot = await getDocs(collectionPost);
//   const listagemPost = postSnapshot.docs.map(doc => doc.data());
//   //console.log(listagemPost)
//   return listagemPost;
// }

// getDoBanco()

// addDoc(collection(db, "users"), {
//   name: "Cássia",
//   email: "cassia@hotmail.com"
// });

export default () => {
  const areaSingUp = document.createElement('div');
  areaSingUp.innerHTML = `
    <div id="main-singUp">
      <h1>Rede Social</h1>
      <form>
        <p>Conecte-se para ver publicações da comunidade.</p>
        <div>
          <button id="google">Entrar com o Google</button>
          <!-- <button>Entrar com o Facebook</button>
          <button>Entrar com o GitHub</button> -->
        </div>
        <div></div>
        <p>OU</p>
        <div></div>
        <input type="email" placeholder="Endereço de e-mail" id="inputEmail">
        <input type="text" placeholder="Nome completo" id="inputName">
        <input type="text" placeholder="Nome de usuário" id="inputLastName">
        <input type="password" placeholder="Senha" id="inputPassword">
        <p id="mensagemErro"></p>
        <button type="submit" id="buttonRegister">Cadastre-se</button>
      </form>
        <div>
          <p>Tem uma conta? <a href="/#login">Conecte-se</a></p>
        </div>
    </div>
`;

  const btnCadastro = areaSingUp.querySelector('#buttonRegister');
  const email = areaSingUp.querySelector('#inputEmail');
  const password = areaSingUp.querySelector('#inputPassword');
  const completeName = areaSingUp.querySelector('#inputName');
  const userName = areaSingUp.querySelector('#inputLastName');

  btnCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('banana');
    console.log(email.value);
    console.log(password.value);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, { email: email.value, name: completeName.value, nameUser: userName.value });
        console.log(user.uid);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  return areaSingUp;
};
