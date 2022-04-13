import "../lib/firebase.js";
import {userLogout} from "../lib/authentication.js"
//import { collection, getDocs } from "../lib/firestore.js";

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
      <button class="logout">Sair</button>
    </div>
    <div class="post">
        <input class="title" type="text" placeholder="Título"></input>
        <input class="text" type="text" placeholder="Texto"></input>
    </div>
    <div> 
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
   
    function order(a, b){
      return a.data - b.data;
    }
   
    buttonPost.addEventListener("click", (e) => {
      e.preventDefault ();
      post.innerHTML += `<div class="publicated">${valueTitle.value.toUpperCase()}<br>${valueText.value}</div>`;
      let arrPost = []
      arrPost = valueTitle.value + valueText.value + data;
      console.log(arrPost);
      arrPost.sort(order());
      valueTitle.value = "";
      valueText.value = "";
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

 logout.addEventListener("click", (e) => {
   e.preventDefault();
   userLogout().then(function () {
     window.location.hash = "";
   });
 });

//  async function getPosts(db) {
//   const postsCol = collection(db, "posts");
//   const postsSnapshot = await getDocs(postsCol);
//   const postsList = postsSnapshot.docs.map(doc => doc.data());
//   console.log(postsList);
//   return postsList;
// }

    return container;
};
