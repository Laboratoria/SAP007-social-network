export default () => {
  const container = document.createElement('div');

  const template = `
    <h2>Sobre a plataforma:</h2>
    <div class="text-about">
    <p>Esta plataforma foi criada em prol do meio ambiente e ecossistema. Este é um espaço para melhorar a visibilidade e alcance das ONGs de proteção ao meio ambiente espalhadas por todo o território brasileiro. Também é um ambiente onde as empresas eco-friendly e outras com iniciativas de preservação ao meio ambiente podem compartilhar e divulgar seus produtos a uma comunidade composta exclusivamente por adotantes do veganismo/vegetarianismo, estilo de vida sustentável e simpatizantes da causa.</p>
    <h3>Sobre as idealizadoras:</h3>
    <p><img src="https://avatars.githubusercontent.com/u/92555432?v=4.png" width="60"/></p>
    <a href="https://github.com/KarinaMel0" target="_blank"> <p>🍀 Karina Mel Silva - 19 anos - Web Developer</p><a>
   

    <p><img src="https://avatars.githubusercontent.com/u/97197240?v=4.png" width="60"/></p>
    <a href="https://github.com/natalieiss" target="_blank"><p>🍀 Natalie Silva - 34 anos - Web Developer</p><a>

    
    <p><img src="https://avatars.githubusercontent.com/u/91857912?v=4.png" width="60"/></p>
    <a href="https://github.com/Marione-Tainara" target="_blank"><p>🍀 Marione Pereira - 27 anos - Web Developer</p><a>
    

    <a href ='#home' class ="return-home">Voltar a página home</a>
    </div>
       
    `;
  container.innerHTML = template;
  return container;
};
