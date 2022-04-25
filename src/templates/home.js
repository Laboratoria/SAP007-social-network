//import { ... } from '../lib/index.js';

export default function home() {
    const container = document.createElement("div");
  
    container.innerHTML = `
      <h1>HOME</h1>
      <button> Post </button>
    `;
  
    return container
  
  }
  