import  "../../lib/config-firebase.js";
import {getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
const db = getFirestore();

export default () => { 
    let containerFeed = document.createElement('div');

    let templateFeed = `
    <p id="post">Post</p>
    <input id="titulo" type="text" placeholder="Título" /><br>
    <input id="postText" type="text" placeholder="Qual a sua teoria?" /><br>
    <br><button id="btnPost" type="submit" >Postar</button><br>
    `;

    containerFeed.innerHTML = templateFeed;

let inputTitulo = containerFeed.querySelector("#titulo");
let inputPost = containerFeed.querySelector("#postText");
let postBtn = containerFeed.querySelector("#btnPost");

async function addDocument_AutoId() {
    let ref = collection(db, "posts");
    console.log(inputTitulo.value);
    console.log(inputPost.value);
    const docRef = await addDoc(
      ref, {
        titulo:inputTitulo.value,
        post:inputPost.value
      }
    )
    .then(() => {
        alert("Post Publicado");
    })
    .catch((error)=> {
        alert ("Post não publicado"+error);
    });
}

postBtn.addEventListener("click", addDocument_AutoId);

return containerFeed;
}