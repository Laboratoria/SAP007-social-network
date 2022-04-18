import header from "../../components/header/index.js";

const profile = {
  createProfile: function () {
   
    const container = document.createElement("main");
    container.setAttribute("id", "main-container");

    const body = document.querySelector("body");
    body.innerHTML = header.createHeader();
    body.innerHTML += `
     <form id="form-profile">
     <div class="linha">
      <div class="foto-perfil"></div>
     </div>
      
     <div class="linha">
      <img />
      <span> Alterar Imagem </span>
     </div>
     
     <div class="linha">
      <label>Nome Social</label>
      <input type="text">
     </div>

     <div class="linha">
      <label>Nome Social</label>
      <input type="text">
     </div>

     <div class="linha">
      <label>Nome Social</label>
      <input type="text">
     </div>

     </form>
    `;
    return container;
  },
};

export default profile;