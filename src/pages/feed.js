import { logout } from "../lib/authentication.js";
import { createPost, getPosts, postDelete } from "../lib/firestore-firebase.js";

export default () => {
  const container = document.createElement("section");
  const template = `
    <section id="post" class="post">
    <button id= "logout"> Sair </button>
    <div class="container-template">
    <p class="tip">Sua dica de leitura:
    <textarea id="post-text" class="post-text" rows="5" cols="55" maxlength="180" placeholder="Escreva aqui"></textarea>
    <p id = "msg-error" class="msg-error"></p>
    <button id="post-button" class="post-button">Enviar</button>
    </div>
    </section>
    <section id="posts" class="posts">
    <ul id="posts-list" class="posts-list"></ul>
    </p>
    </section>
    `;
  container.innerHTML = template;

  const postArea = container.querySelector("#posts");
  const btnPost = container.querySelector("#post-button");
  const textPost = container.querySelector("#post-text");
  const msgError = container.querySelector("#msg-error");
  const logoff = container.querySelector("#logout");

  const templateFeed = (post) => {
    const user = getUser();
    const isAuthor = user.uid === post.uid;
    const postContainer = document.createElement("div");
    postContainer.innerHTML = `
    <div class= "box-feed">
    <ul class= "box-feed">
    <li>
    <p>${post.textPost}</p>
    <button class="button-like">Like</button>
    ${isAuthor && `<button class="button-delete">Excluir</button>`}
    <button class="button-edit">Editar</button>
    </li>
  </ul>
  <span class ="delete-post"></span>
  </div>
  `

    logoff.addEventListener("click", async () => {
      await logout()

    })

    const deleteBtn = postContainer.querySelector(".button-delete");
    deleteBtn.addEventListener("click", async () => {
      await postDelete(post.id);
      console.log(post.id);
      await readPosts();
    });
    return postContainer
  }

  btnPost.addEventListener("click", async () => {
    const timeLine = postArea.innerHTMl;
    postArea.innerHTML = "";
    const text = textPost.value;
    if (text === "") {
      msgError.innerHTML = "Opa, digite sua mensagem!";
    } else {
      await createPost(textPost.value);
      postArea.innerHTML += templateFeed(textPost.value)

      readPosts();
      postArea.innerHTML += timeLine;
    }
  });

  const readPosts = async () => {
    const allPost = await getPosts();
    const postSection = document.querySelector("#posts");
    postSection.innerHTML = "";
    allPost.forEach((post) => {
      postSection.appendChild(templateFeed(post));
    });
  };
  readPosts();

  return container;
};


