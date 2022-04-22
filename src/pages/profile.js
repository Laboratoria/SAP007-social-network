import { auth } from "../lib/authentication.js";
import { getPost } from "../lib/firestore.js";
import card from "../components/card.js";


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
        <div class="feed">
            <span class="edition"></span>
        </div>
        `;
  container.innerHTML = template;

  const post = container.querySelector(".feed");
  const editAction = container.querySelector(".edit");
  const deleteAction = container.querySelector(".delete");
  const edition = container.querySelector(".edition");
      
    // editAction.addEventListener("click", async(e) => {
    //     e.preventDefault();
    //     edition.innerHTML += `
    //         <textarea class="title" type="text" placeholder="Título"></textarea>
    //         <textarea class="text" type="text" placeholder="Texto" wrap="hard"></textarea>
    //         <button class="btn-post" type="submit">Atualizar</button>
    //         `;
    //     const id = await editPost()
    // });

    // deleteAction.addEventListener("click", (e) =>{

    // // })
    const showAllPosts = async () => {
        const allPosts = await getPost();
        allPosts.map(item => {
            const postElement = card(item);
            post.prepend(postElement);
        })
    };
    showAllPosts();

    auth.onAuthStateChanged(user => {
        if(user){
            showAllPosts()
        }
    });

    return container;
}