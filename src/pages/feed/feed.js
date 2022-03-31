// import { userLogin } from '../login/authentication';

export default function signin() {
  const createFeed = document.createElement('section');

  const feedTemplate = `
    <section class="main-content">
   <p> FEED!! WE DID IT!!! WE ARE THE CHAMPIONS, MY FRIEND!!<p>
    </section>
    `;

  createFeed.innerHTML = feedTemplate;

  /* const email = createFeed.querySelector('#email');
  const password = createFeed.querySelector('#password');
  const buttonSubmit = createFeed.querySelector('#buttonSubmit');

  buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Algo deu errado!');
        return errorMessage;
      });
  }); */

  return createFeed;
}
