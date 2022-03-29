// importar da .LIB a função de autenticação do firebase

export default function signin() {
  const createFeed = document.createElement('section');

  const feedTemplate = `
    <section class="main-content">
   <p> FEED!!<p>
    </section>
    `;

  createFeed.innerHTML += feedTemplate;

  const email = createFeed.querySelector('#email');
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
        alert('Deu ruim!');
        return errorMessage;
      });
  });

  return createFeed;
}
