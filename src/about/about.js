export about() => {
    const container = document.createElement('div')

    const template = `
    <h2>Sobre a plataforma:</h2>
    <div class="text-about">
    <p>Esta plataforma foi criada em prol do meio ambiente e ecossistema. Este é um espaço para melhorar a visibilidade e alcance das ONGs de proteção ao meio ambiente espalhadas por todo o território brasileiro. Também é um ambiente onde as empresas eco-friendly e outras com iniciativas de preservação ao meio ambiente podem compartilhar e divulgar seus produtos a uma comunidade composta exclusivamente por adotantes do veganismo/vegetarianismo, estilo de vida sustentável e simpatizantes da causa.</p>
    <h3>Sobre as idealizadoras:</h3>
    <p><img src="https://drive.google.com/file/d/1aqJww5uGNiH-eNp3y85DovzP1MkRT2Q1/view?usp=sharing" width="200"/></p>
    <p>🍀 Karina Mel Silva - 19 anos - Web Developer</p>
    <a href="https://github.com/KarinaMel0" target="_blank">
    <p><img src="https://drive.google.com/file/d/1bUbwbuil_5LcWnPhPnDSNHRQYuhR8ita/view?usp=sharing" width="200"/></p>
    <p>🍀 Natalie Silva - 34 anos - Web Developer</p>
    <a href="https://github.com/natalieiss" target="_blank">
    <p><img src="https://drive.google.com/file/d/17FvUyl7WZ0Hx8-XFmPIE-XNyXE9vcCCT/view?usp=sharing" width="200"/></p>
    <p>🍀 Marione Pereira - 27 anos - Web Developer</p>
    <a href="https://github.com/Marione-Tainara" target="_blank">
    <a href ='#' class ="return-home">Home</a>
    </div>
       
    `; container.innerHTML = template;
      const textAbout = container.getElementById('text-about');
      textAbout.addEventListener('click',(e) => {
          e.preventDefault();
         const home = document.querySelector('.return-home');
      })

  return container;
}