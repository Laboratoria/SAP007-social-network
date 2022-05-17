import { getUser } from "../lib/authentication.js";
import { logout } from "../lib/authentication.js";
import {
  createPost,
  getPosts,
  postDelete,
  like,
  dislike,
  postEdit
} from "../lib/firestore-firebase.js";

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
    <p>${post.user}</p>
    <p>${post.textPost}</p>

    ${isAuthor && `<button class= "button-delete">Excluir</button>`}
    <button type="button" id="button-like" class="button-like">
    <img src="./images/like.png" class="btn-like" width="30px"/>
    </button>
    <p id="numLikes" class="numLikes-${post.id}">${post.likes.length}</p>
   
    </li>
  </ul>
  <span class ="delete-post"></span>
  </div>
  `;

  logoff.addEventListener("click", async () => {
    await logout()

  });


    const btnLike = postContainer.querySelector(".button-like");
    btnLike.addEventListener("click", () => {
      like(post.id).then(() => {
        const newLikes = post.likes.length + 1;
        const numLikes = postContainer.querySelector(".numLikes-" + post.id);
        numLikes.innerHTML = newLikes;
      });

    });



    if (isAuthor) {
      const deleteBtn = postContainer.querySelector(".button-delete");
      deleteBtn.addEventListener("click", async () => {
        await postDelete(post.id);
        console.log(post.id);
        await readPosts();
      });
    }

    return postContainer;
  };

  btnPost.addEventListener("click", async () => {
    const timeLine = postArea.innerHTMl;
    postArea.innerHTML = "";
    const text = textPost.value;
    if (text === "") {
      msgError.innerHTML = "Opa, digite sua mensagem!";
    } else; {
      await createPost(textPost.value);
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
  
