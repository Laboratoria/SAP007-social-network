import "../lib/firebase.js";

export default () => {
    const container = document.createElement("section");
    container.setAttribute("class", "section");
  
    const template = `
        <nav class="nav-section">
          <ul>
            <li><a href="#timeline">Linha do Tempo</a></li>
            <li><a href="#profile">Perfil</a></li>
          </ul>
          <hr>
        </nav>
    `;
  
    container.innerHTML = template;

    const feed = document.createElement("section");
    feed.setAttribute("class", "feed-section");

    const mold = `
        <div>
            <input class="title" type="text" placeholder="Título"></input>
            <input class="text" type="text" placeholder="Texto publicado"></input>
        </div>
        
    `;

    feed.innerHTML = mold;
    
    container.appendChild(feed);

    return container;
};