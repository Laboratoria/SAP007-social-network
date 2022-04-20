//import { userLogout } from "../lib/auth.js";


export function printNav() {
  const navContainer = document.createElement("nav");
  navContainer.classList.add("nav-menu");
  const navigationBar = `   <img src="assets/lupas.png" alt="ícone-lupa">
    <input type="text" class="recipe-search" placeholder="Buscar receita"/>

    <button class="logout-btn"> <a href="#login"> Sair</a> </button>

    

    <div class="new-recipe-container">
    <button class="new-recipe-btn" id="btn-new-recipe"> <a href="#writePost"> Postar nova receita </a></button>
    </div>
`;
  //const searchRecipe = navContainer.querySelector('#recipe-search');
  //const logOut = navContainer.querySelector("#logout-btn");
  //const newRecipe = navContainer.querySelector('#btn-new-recipe');

  // logOut.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   userLogout().then(() => {
  //     window.location.hash = "";
  //   });
  // });

  // searchRecipe.addEventListener('keyup', function(){
  //   })

  // newRecipe.addEventListener("click", (e))
  // {
  //     e.preventDefault();
  //   window.location.hash="#writePost";
  // }

  navContainer.innerHTML = navigationBar;
  return navContainer;
}
