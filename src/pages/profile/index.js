
import header from "../../components/header/index.js";

const profile = {
  createProfile: function () {
   
    const container = document.createElement("main");
    container.setAttribute("id", "main-container");

    const body = document.querySelector("body");
    body.innerHTML = header.createHeader();
    body.innerHTML += `
     <div>
     <h1> PROFILE </h1>
     </div>
    `;
    return container;
  },
};

export default profile;