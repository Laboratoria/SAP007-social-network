export const pageAbout = () => {
  const about = document.createElement('div');
  about.setAttribute('class', 'box-about flex-direction-about');
  about.innerHTML = `    
      <section class="header-page-about">
        <a href="#login" class="btn-back-about" id="btn-back-about"><img src="./img/iconeSair.png" alt="botão sair" class="img-btn-back"></a>
        <figure class="box-slogan-page-about">
          <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-about">
        </figure>  
      </section>  
      <figure class="box-slogan-desktop">
        <img src="./img/imgLogoDesktop.png" alt="Logotype" class="logo-desktop">
      </figure>
      <section class="about text-align">
        <h1 class="tittle-about">K-Fandom</h1>      
        <p class="text-about">A K-Fandom é uma Rede Social voltada para kpopers (fãs de Kpop). Sinta-se à vontade para compartilhar tudo relacionado sobre Kpop, falar sobre votações, conhecer amigues e o melhor de tudo dentro de um espaço onde todes curtem o mesmo estilo. Curta mensagens e se conecte nesse meio. 
        Essa Rede surgiu da ideia de trazer um cantinho seguro onde kpopers podem compartilhar sem se sentirem julgados. Uma grande maioria de kpopers na internet são pessoas mais jovens e estar em um meio onde temos apenas pessoas com interesses em comum e com postagens públicas apenas, evitamos de pessoas más intencionadas de agirem através de mensagens diretas.
        Esta é uma rede social em construção e para fins (inicialmente) de estudo. O projeto foi iniciado a partir da ideia da Laboratória para aprender desenvolvimento Web. Conheça ou mande seu feedback para as desenvolvedoras:
        </p>
      </section>
      <h2 class="tittle-devs-about">Desenvolvido por:</h2>
      <section class="about-devs">       
        <div class="div-picture-devs">    
          <img src="./img/Anna.jpg" alt="picture-dev-anna" class="picture-devs">                
          <p><h3>Anna Ferraz</h3>                   
          <a href="https://github.com/AnnaIsah" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/anna-ferraz/" target="_blank">LinkedIn</a></p>          
        </div>               
        <div class="div-picture-devs">
          <p><img src="./img/Monica.jpg" alt="picture-dev-anna" class="picture-devs"></p>       
          <p><h3> Mônica Guimarães</h3>         
          <a href="https://github.com/MonicaGuimaraes" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/monica-peixoto-guimaraes-v/" target="_blank">LinkedIn</a><p>
        </div>               
        <div class="div-picture-devs">            
          <img src="./img/Taize.jpg" alt="picture-dev-anna" class="picture-devs">         
          <p><h3> Taize dos Santos</h3>        
          <a href="https://github.com/taizesantos" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/taizeborges/" target="_blank">LinkedIn</a></p> 
        </div>                    
      </section>  
     `;
  return about;
};
