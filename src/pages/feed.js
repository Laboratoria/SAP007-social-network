

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
    ${isAuthor ? `<button class= "button-edit"><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg></button>`: ""}
    ${isAuthor ? `<button class= "button-delete"><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.99219 13H11.9922H14.9922" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z" stroke="currentColor" stroke-width="1.5"/>
    <path d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5" stroke="currentColor" stroke-width="1.5"/>
    </svg></button>`: ""}
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
      editBtn.addEventListener("click", async () => {
      const text = postContainer.querySelector(".userText")
      text.setAttribute("contenteditable", true);
      const edit = document.createElement("div")
      edit.innerHTML = `
      <button class= "save">Salvar</button>
      `
      text.insertAdjacentElement("beforebegin", edit)

      edit.addEventListener("click", () =>{
        text.setAttribute("contenteditable", false)
        postEdit(post.id, textPost)


      })



      // const saveBtn = postContainer.querySelector(".button-save")
     // editBtn.insertAdjacentHTML("afterend", saveBtn)
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
