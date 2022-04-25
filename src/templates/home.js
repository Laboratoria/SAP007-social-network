import { getPosts } from "../lib/firestore-firebase.js"

export default function home() {
    const container = document.createElement("div");
  
    container.innerHTML = `
      <h1>HOME</h1>
      <form> 
      <textarea class='post' placeholder="Escreva seu post"></textarea>
      </form>
      <button>postar</button>
      
    `;

  getPosts()

    return container
  
  }
  