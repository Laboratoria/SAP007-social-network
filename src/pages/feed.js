// importar funções de autenticação do Firebase a partir da parta 'services'

export default function signin() {
  const feed = document.createElement('section');
  feed.innerHTML += `
    <section class="main-content">
    <p> FEED!!<p>
    </section>
    `;
  const email = feed.querySelector('#email');
  const password = feed.querySelector('#password');
  const buttonSubmit = feed.querySelector('#buttonSubmit');

  return feed;
}
