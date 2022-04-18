import "../lib/firebase.js";
import { userLogout } from "../lib/authentication.js";
import { publicatedPost, getPost, db } from "../lib/firestore.js";
import card  from "../components/card.js";

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
<div class="div-logout">
<button class="logout">Sair</button>
</div>
<div class="post">
<input class="title" type="text" placeholder="Título"></input>
<input class="text" type="text" placeholder="Texto" wrap="hard"></input>
<button class="btn-post" type="submit">Postar</button>
</div>
<div class="feed"><div>
`;
  // <img class="like" src="./images/like.png" alt="Ìcone de joinha">

  feed.innerHTML = mold;
  container.appendChild(feed);

  const post = container.querySelector(".feed");
  const buttonPost = container.querySelector(".btn-post");
  const valueTitle = container.querySelector(".title");
  const valueText = container.querySelector(".text");
  const logout = container.querySelector(".logout");
  const data = new Date();
  buttonPost.addEventListener("click", async (e) => {
    e.preventDefault();
    post.innerHTML += `<div class="publicated">${valueTitle.value.toUpperCase()}<br>${
      valueText.value
    }</div>`;
    const title = valueTitle.value;
    const text = valueText.value;
    const id = await publicatedPost(title, text);
    valueTitle.value = "";
    valueText.value = "";
  });

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    userLogout().then(function () {
      window.location.hash = "";
    });
  });
  
    // function showAllPosts(){
    //   db
    //   .collection("posts")
    //   .get()
    //   .then(snapshot => {
    //     console.log(snapshot);
    //   })
    // }
  const showAllPosts = async () => {
    const allPosts = await getPost();
    console.log(allPosts);
    allPosts.map(item => {
      console.log(item);
        const postElement = card(item);
        console.log(postElement);
        post.prepend(postElement);
    })
  }
showAllPosts();

  return container;
};
