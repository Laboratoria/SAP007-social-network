import { getUser, auth, logout } from "../lib/authentication.js";
import {
  createPost,
  getPosts,
  postDelete,
  like,
  dislike,
  postEdit,
} from "../lib/firestore-firebase.js";

export default () => {
  const container = document.createElement("section");
  const template = `
    <section id="post" class="post">
    <button id= "logout" class= "logout"> Sair </button>
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
    <p class="userPost">${post.user}</p>
    <section class="postSection">
    <p class="userText" contenteditable="false">${post.textPost}</p>
    </section>
    <button type="button" id="button-like" class="button-like">
    <img src="./images/like.png" class="btn-like" width="25px"/>
    <p id="numLikes" class="numLikes-${post.id}">${post.likes.length}</p>
    </button>
    ${isAuthor ? `<button class= "button-edit">Editar</button>`: ""}
    ${isAuthor ? `<button class= "button-delete">Excluir</button>`: ""}
    </li>
    </ul>
    <span class ="delete-post"></span>
    </div>
  ` ;

    logoff.addEventListener("click", async () => {
      await logout();
    });

    const btnLike = postContainer.querySelector(".button-like");
    btnLike.addEventListener("click", async (e) => {
      e.preventDefault();
      likePost(post.id);
      if (!post.likes.includes(auth.currentUser.uid)) {
        like(post.id).then(() => {
          post.likes.push(auth.currentUser.uid)
          const newLikes = post.likes.length;
          const numLikes = postContainer.querySelector(".numLikes-" + post.id);
          numLikes.innerHTML = newLikes;
        });
      } else {
        dislike(post.id).then(() => {
          const index= post.likes.indexOf(auth.currentUser.uid)
          post.likes.splice(index,1)
          const newDislikes = post.likes.length;
          const numLikes = postContainer.querySelector(".numLikes-" + post.id);
          numLikes.innerHTML = newDislikes;
          console.log(newDislikes);
        });
      }

    });
    if (isAuthor) {
      const deleteBtn = postContainer.querySelector(".button-delete");
      deleteBtn.addEventListener("click", async () => {
        await postDelete(post.id);
        console.log(post.id);
        await readPosts();
      });
    }

    if (isAuthor) {
      const editBtn = postContainer.querySelector(".button-edit");
      editBtn.addEventListener("click", () => {
      const text = postContainer.querySelector(".userText")
      text.setAttribute("contenteditable", true);
    /*  const editConfirm = document.createElement("div");
      editConfirm.innerHTML=   `
      <section class="post-edit">
        <div class= "edit-confirm">
          <button class= "button-save">Salvar</button>
          <button class="button-cancel">Cancelar</button>
        </div>
      </section>`*/
       //um novo botão para confirmar/cancelar a edição
      //atualizar o valor setatribute(true)
      //pegar o valor novo do pragrafo chamar a funçao com id do post

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
    } else;
    {
      await createPost(textPost.value);
      readPosts();
      postArea.innerHTML += timeLine;
    }
  });

  const readPosts = async () => {
    const allPost = await getPosts();
    const postSection = container.querySelector("#posts");
    postSection.innerHTML = "";
    allPost.forEach((post) => {
      postSection.appendChild(templateFeed(post));
    });
  };
  readPosts();

  return container;
};
