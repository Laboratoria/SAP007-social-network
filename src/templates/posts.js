//import { ... } from '../lib/index.js';

export default function posts() {
    const profilePage = document.createElement("div");
    profilePage.classList.add("profile-user-posts")
  
    profilePage.innerHTML = `
    <input type="search" placeholder="Buscar">
    <button>Buscar</button>
    <button><img class="profile-user-posts" src="./images/user-icon.png" alt="ícone contorno do usuário"></button>
    <textarea>
    Conta um pouco sobre o quadrinho que você esta lendo?
    </textarea>
    <button>POSTAR</button>
    <button>EXCLUIR</button>
    `;
  
    return profilePage
  
  }
