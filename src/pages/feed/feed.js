import "../../lib/config-firebase.js";
//import { lerPost } from "../../lib/config-firestore.js";


export default () => { 
    let containerFeed = document.createElement('div');

    let templateFeed = `
    <p id="post">Post</p>
    <input id="titulo" type="text" placeholder="Título" /><br>
    <input id="post" type="text" placeholder="Qual a sua teoria?" /><br>
    <br><button id="btnPost" type="submit" >Postar</button><br>
    `;

    containerFeed.innerHTML = templateFeed;
    console.log("entrou");
}
̣ //id='buttonPost
 //const listButtonPost = containerFeed.querySelector("#buttonPost");

 
    //listButtonPost.addEventListener("click", (e) => {
      //  e.preventDefault();
      //  lerPost().then(() => {
   //     })
   // });   

    return containerFeed;


let inputTitulo = document.getElementById("titulo");
let inputPost = document.getElementById("post");
let postBtn = document.getElementById("btnPost");

async function addDocument_AutoId() {
    let ref = collection(db, "posts");
    
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
