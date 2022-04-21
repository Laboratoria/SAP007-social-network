export default () => {
  const container = document.createElement('div');
  const link = document.getElementById('stylePages');
  link.href = 'about/about.css';
  const template = `
  <div class="text-about">
  <p class="text-about">Sobre a plataforma:</p>
  <p>Esta plataforma foi criada em prol do meio ambiente e ecossistema. Este é um espaço para melhorar a
    visibilidade e alcance das ONGs de proteção ao meio ambiente espalhadas por todo o território brasileiro. Também
    é um ambiente criado para que as empresas eco-friendly e outras com iniciativas de preservação ao meio ambiente
    possam compartilhar e divulgar seus produtos e ideias a uma comunidade composta exclusivamente por amantes da
    natureza, adotantes do veganismo/vegetarianismo, estilo de vida sustentável e simpatizantes da causa.</p>
  <h3 class="text-about">Sobre as idealizadoras:</h3>
  <picture><img class="developers-img" src="https://avatars.githubusercontent.com/u/92555432?v=4.png" width="60" />
  </picture>
  <a href="https://github.com/KarinaMel0" target="_blank">
    <p class="name" style="float: left">🍀 Karina Mel Silva - 19 anos - Web Developer</p><a>

      <picture><img class="developers-img" src="https://avatars.githubusercontent.com/u/97197240?v=4.png"
          width="60" /></picture>
      <a href="https://github.com/natalieiss" target="_blank">
        <p class="name">🍀 Natalie Silva - 34 anos - Web Developer</p><a>

          <picture><img class="developers-img" src="https://avatars.githubusercontent.com/u/91857912?v=4.png"
              width="60" /></picture>
          <a href="https://github.com/Marione-Tainara" target="_blank">
            <p class="name">🍀 Marione Pereira - 27 anos - Web Developer</p><a>

              <a href='#home' class="return-home">Voltar a página home</a>
</div>
       
    `;
  container.innerHTML = template;
  return container;
};
