export const pageAbout = () => {
  const about = document.createElement('div');
  about.setAttribute('class', 'box-form-login');
  about.innerHTML = `    
    
      <figure class="box-slogan-page-login">
        <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-login">
      </figure>  
      
      <section class="about text-align">
        <h1 class="tittle-about">Lorem ipsum dolor sit amet</h1>      
        <p class="text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>

      <section class="devs-about">
        <h2 class="tittle-devs-about">Desenvolvido por:</h2>      
        <picture>
          <img src="./img/Anna.jpg" alt="picture-dev-anna" class="picture-dev">
            <a href="#open-modal-anna"> Anna Ferraz</a>
            
              <section class="modal-devs" id="open-modal-anna">
                <a href="#close-modal-anna" class="close">x</a>
                <a href="https://github.com/AnnaIsah" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/anna-ferraz/" target="_blank">LinkeIn</a>
              </section>  
          
          <img src="./img/Monica.jpg" alt="picture-dev-anna" class="picture-dev">
            <a href="#open-modal-monica"> Mônica Guimarães</a>
            
              <section class="modal-devs" id="open-modal-monica">
                <a href="#close-modal-monica">x</a>
                <a href="https://github.com/MonicaGuimaraes" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/monica-peixoto-guimaraes-v/" target="_blank">LinkeIn</a>
              </section>  
          
          <img src="./img/Taize.jpg" alt="picture-dev-anna" class="picture-dev">
            <a href="#open-modal-taize"> Taize dos Santos</a>
            
              <section class="modal-devs" id="open-modal-taize">
                <a href="#close-modal-taize">x</a>
                <a href="https://github.com/taizesantos" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/taizeborges/" target="_blank">LinkeIn</a>
              </section>  
        </picture>
      </section>  
  `;
  return about;
};
