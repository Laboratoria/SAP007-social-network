//import { ... } from '../lib/index.js';

export default function posts() {
    const container = document.createElement("div");
  
    container.innerHTML = `
      <h1>POST</h1>
      <form> 
      <textarea placelholder="Escreva seu post">
      </form>
    `;
  
    return container
  
  }
