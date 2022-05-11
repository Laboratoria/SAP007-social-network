import  "../../lib/config-firebase.js";
import {getFirestore, collection, addDoc, query, getDocs } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
const db = getFirestore();

export default () => { 
    let containerFeed = document.createElement('div');

    let templateFeed = `
    <p id="post">Post</p>
    <input id="titulo" type="text" placeholder="Título" maxlength="90"/><br>
    <input id="postText" type="text" placeholder="Qual a sua teoria?" maxlength="280" /><br>
    <br><button id="btnPost" type="submit" >Postar</button><br>
    <div class="sectionFeedContainer">
    <section id="sectionNewPost" class="sectionPostClass"></section>
    <section id="sectionPost" class="sectionPostClass"></section>
    </div>
    `;

    containerFeed.innerHTML = templateFeed;

let inputTitulo = containerFeed.querySelector("#titulo");
let inputPost = containerFeed.querySelector("#postText");
let postBtn = containerFeed.querySelector("#btnPost");

const sectionNewPost = containerFeed.querySelector("#sectionNewPost");

async function addDocument_AutoId() {
    let ref = collection(db, "posts");
    const docRef = await addDoc(
      ref, {
        titulo:inputTitulo.value,
        post:inputPost.value
      }
    )
    .then(() => {
      sectionNewPost.innerHTML = `
        <div class="divPost">
        ${inputTitulo.value} <br>
        ${inputPost.value} <br>
        <div class="linePost"></div>
        <a class="icons" id="iconLike">
          <img src="../../../img/curtir.png" width="40" height="40" />
        </a>
        <a class="icons" id="iconComent">
          <img src="../../../img/comentar.png" width="40" height="40" />
        </a>      
        <a class="icons" id="iconEdit">
          <img src="../../../img/editar.png" width="40" height="40" />
        </a>      
        <a class="icons" id="iconDelete">
          <img src="../../../img/excluir.png" width="40" height="40" />
        </a>
        </div>
      `
    })
    .catch((error)=> {
        alert ("Post não publicado"+error);
    });
}

postBtn.addEventListener("click", addDocument_AutoId);

const sectionAllPost = containerFeed.querySelector("#sectionPost");

const getPosts = async () => {
  const arrayPosts = [];
  const queryFirestore = query(collection(db, 'posts'));
  const allPosts = await getDocs(queryFirestore);
  allPosts.forEach((doc) => {
    const timeline = doc.data(); //ordenando por data
    arrayPosts.push({ ...timeline, id: doc.id });
    sectionAllPost.innerHTML = arrayPosts.map(
      (post) =>`
      <div class="divPost">
      ${post.titulo} <br>
      ${post.post} <br>
      <div class="linePost"></div>
      <a class="icons" id="iconLike">
        <img src="../../../img/curtir.png" width="40" height="40" />
      </a>
      <a class="icons" id="iconComent">
        <img src="../../../img/comentar.png" width="40" height="40" />
      </a>      
      <a class="icons" id="iconEdit">
        <img src="../../../img/editar.png" width="40" height="40" />
      </a>      
      <a class="icons" id="iconDelete">
        <img src="../../../img/excluir.png" width="40" height="40" />
      </a>
      </div>
    `
    )
    .join("");
  });

};

getPosts();
return containerFeed;
}