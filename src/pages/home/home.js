export const home = () => {
  const homeCreate = document.createElement('div');
  const welcomeHome = `
    <link rel="stylesheet" href="./src/css/style.css" />

    <header>
    <nav class="nav-menu">
    <img src="img/icone.png" class="nav-logo">
    <h1 class="nav-title"> Mirame </h1>
    </nav>
    </header>
    <main class="home-container">
      <section class="home-buttons">
        <button class="button">Entrar</button>
        <button class="button">Cadastrar</button>
      </section>
  
      <section class="text-content">
        <p>Converse, <span>descubra</span> e <span>compartilhe</span> seus filmes e séries favoritos</p>
        <p>Crie sua conta para ter acesso a comunidade</p>
      </section>
  
      <div class="button-container">
        <button class="button">Participar</button>
      </div>
  
      <div class="home-image">
        <img src="img/img-home.svg" alt="Homem no sofá, com um balde de pipoca e óculos 3D.">
      </div>
  
    </main>
  
    <footer>
      <p>Desenvolvido por Julia Benedicto e Vanessa Borges</p>
    </footer>

    `;

  homeCreate.innerHTML = welcomeHome;
  return homeCreate;
};
