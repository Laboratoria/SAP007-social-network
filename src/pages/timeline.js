import "../lib/firebase.js";

export default () => {
    const container = document.createElement("section");
    container.setAttribute("class", "nav-section");
  
    const template = `
          <nav>
          <div><a href="#timeline">Linha do Tempo</a></div>
          <div><a></a href="profile">Perfil</div>
          </nav>
          <hr>
      `;
  
    container.innerHTML = template;

    const feed= document.createElement("section");
    feed.setAttribute("class", "feed-section");

    const mold = `
        <div>
        <input placeholder="Título"></input>
        <input placeholder="Texto"></input>
        </div>
        
    `
    feed.innerHTML = mold;
    
    container.appendChild(feed);

    return container;}