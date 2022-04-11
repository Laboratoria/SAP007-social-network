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
    <div class="post">
        <input class="title" type="text" placeholder="Título"></input>
        <input class="text" type="text" placeholder="Texto"></input>
    </div>
    <div>
      <button class="btn-post" type="submit">Postar</button>
      <img class="like" src="./images/like.png" alt="Ìcone de joinha">
      </div>
    <div class="feed"><div>    
`;

    feed.innerHTML = mold;
    
    container.appendChild(feed);

    const post = container.querySelector(".feed");
    const buttonPost = container.querySelector(".btn-post");
    const valueTitle = container.querySelector(".title");
    const valueText = container.querySelector(".text");

    buttonPost.addEventListener("click", (e) => {
      e.preventDefault ();
      post.innerHTML += valueTitle.value + valueText.value; 
    })
    // firebase.auth().onAuthStateChanged(function(user){
    //   if(user){
    //     const uid = user.uid;
    //     uid != null
    //     window.location.hash = "#timeline";
    //   }else{
    //     alert("Offline");
    //   }
    // });

    return container;
};

