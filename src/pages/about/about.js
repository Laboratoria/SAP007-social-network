export const pageAbout = () => {
  const about = document.createElement('div');
  about.setAttribute('class', 'box-form-login');
  about.innerHTML = `    
    
      <figure class="box-slogan-page-login">
        <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-login">
      </figure>       
       
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <picture>
      <img src="./img/Anna.jpg" alt="picture-dev-anna" class="picture-dev">
      <img src="./img/Monica.jpg" alt="picture-dev-anna" class="picture-dev">
      <img src="./img/Taize.jpg" alt="picture-dev-anna" class="picture-dev">
      </picture>
  `;
  return about;
};
