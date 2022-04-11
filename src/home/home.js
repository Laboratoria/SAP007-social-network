export const home = () => {
  const homeCreate = document.createElement('div');
  const templateHome = `
    <main class="home-container">
      <section class="home-buttons nav-menu">
        <a href="#login" class="button">Entrar</a>
        <a href="#register" class="button">Cadastrar</a>
      </section>
  
      <section class="text-content">
        <p>Converse, <span>descubra</span> e <span>compartilhe</span> seus filmes e séries favoritos</p>
        <p class="text-participate participate">Crie sua conta para ter acesso a comunidade</p>
      </section>
  
      <div class="button-container">
        <a href="#register" class="button button-register">Participar</a>
      </div>
  
      <div class="container-image">
        <img src="img/img-home.svg" class="home-image" alt="Homem no sofá, com um balde de pipoca e óculos 3D.">
      </div>
  
    </main>
    `;

  homeCreate.innerHTML = templateHome;
  return homeCreate;
};
