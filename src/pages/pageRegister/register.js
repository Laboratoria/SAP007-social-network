import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const infoRegister = `
    <div class="container">
            <div class="content first-content">
            <div class="first-column">
                <h2 class="title-welcome">Welcome back!</h2>
                <p class="description">To keep conected with us</p>
                <p class="description">please login with your personal info</p>
                <button class="botao btn-primary" id="backToLogin">Sign in</button>
            </div>
            <div class="second-column">
                <h2 class="title title-second">Create Account</h2>
                <form class="form">
                    <label class="label-input">
                        <i class="fa-regular fa-user icon-modify"></i>
                        <input type="text" placeholder="Name">
                    </label>
                    <label class="label-input">
                        <i class="fa-regular fa-envelope icon-modify"></i>
                        <input type="email" id="input-email" placeholder="E-mail">
                    </label>
                    <label class="label-input">
                       <i class="fa-solid fa-lock icon-modify"></i>
                       <input type="password" id="input-password" placeholder="Password" minlenght="8">
                    </label>
                    <label class="label-input">
                       <i class="fa-solid fa-lock icon-modify"></i>
                        <input type="password" id="input-password" placeholder="Confirme your password">
                    </label>
                    <button id="btn-register" class=" botao btn-second">Sign up</button>
                </form>
            </div>
        </div>
    `;
    container.innerHTML = infoRegister;

    container.addEventListener('submit', (event) => {
      event.preventDefault();
      const auth = getAuth();
      const email = document.querySelector('#input-email').value;
      const password = document.querySelector('#input-password').value;
      if (email === '' || password === '') {
        alert('Please fill all register fields');
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    });
    return container;
  };
