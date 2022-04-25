import { getPosts } from "../lib/firestore-firebase.js"

export default function home() {
    const container = document.createElement("div");
  
    container.innerHTML = `
      <h1>HOME</h1>
    `;

  getPosts()

    return container
  
  }
  