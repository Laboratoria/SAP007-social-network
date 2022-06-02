
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

export default () => {
    const container = document.createElement('div');

    const infoLogin = `
        <div class="conteudo">
          <h2>Log In</h2>
           <form class="forms">
             <label class="input-label">
               <i class="fa-regular fa-envelope icon-modify"></i>
               <input id="input-email" type="email"placeholder="E-mail">
             </label>
             <label class="input-label">
               <i class="fa-solid fa-lock icon-modify"></i>
               <input id="input-password" type="password" placeholder="Password">
             </label>
             <button class="botao" id="btn-Login">Log in</button>
             <button class="botao" id="btn-Signup"type="submit">Sign Up</button>
            <div class="alternative">
              <span>Continue with</span>
            </div>
             <button class="botao" id="botao-google" type="submit">
               <img src="./images/google (1).png" id="google">
             </button>    
           </form>
        </div>

    `;
  container.innerHTML = infoLogin;
  container.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    if (event.submitter != null) {
      if (event.submitter.id === 'btn-Login') {
        const auth = getAuth();
        const email = document.querySelector('#input-email').value;
        const password = document.querySelector('#input-password').value;
        if (email === '' || password === '') {
          alert('Please fill all login fields');
          return;
        }
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.location.hash = '#feed';
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      } else {
        window.location.hash = '#register';
      }
    }
  });

  return container;
};
