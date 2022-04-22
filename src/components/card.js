import { auth } from "../lib/authentication.js";
  
  //const user = auth.currentUser.uid;
  //console.log(user);
  
  export default (item, uid) => {
    const publications = document.createElement("div");
    publications.setAttribute ("class", "publicated");
    const mold = `
    <h3 class="published-title">${item.title}</h3>
    <p class="published-text">${item.text}</p>
    <div class="user-name">${item.uid}</div>
    <div>
      <a href=""class=""edit">editar</a>
      <a href=""class="delete">deletar</a>
    </div>
    `;
 publications.innerHTML = mold;
 return publications;
};