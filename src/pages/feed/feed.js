import  "../../lib/config-firebase.js";
import {getFirestore, collection, addDoc, query, getDocs } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
const db = getFirestore();

export default () => { 
    let containerFeed = document.createElement('div');

    let templateFeed = `
    <p id="post">Post</p>
    <input id="titulo" type="text" placeholder="Título" /><br>
    <input id="postText" type="text" placeholder="Qual a sua teoria?" /><br>
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

async function addDocument_AutoId() {
    let ref = collection(db, "posts");
    const docRef = await addDoc(
      ref, {
        titulo:inputTitulo.value,
        post:inputPost.value
      }
    )
    .then(() => {
        alert("Post Publicado");// enviar para sectionNewPost
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
    sectionAllPost.prepend(arrayPosts);
  });
  console.log(arrayPosts); //ver se array ta indo
  //return arrayPosts;
};

getPosts();
return containerFeed;
}