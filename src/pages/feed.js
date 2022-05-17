import {
  createPost,
  getPosts,
  postDelete,
  like,
  dislike
} from "../lib/firestore-firebase.js";

export default () => {
  const container = document.createElement("section");
  const template = `
    <section id="post" class="post">
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

  const templateFeed = (post) => {
    const postContainer = document.createElement("div");
    postContainer.innerHTML = `
    <div class= "box-feed">
    <ul class= "box-feed">
    <li>
    <p>${post.textPost}</p>
    <button type="button" id="button-like" class="button-like">
    <img src="./images/like.png" class="btn-like" width="30px"/>
    </button>
    <p id="numLikes" class="numLikes-${post.id}">${post.likes.length}</p>
    <button class="button-delete">Excluir</button>
    </li>
  </ul>
  <span class ="delete-post"></span>
  </div>
  `;

  const btnLike = postContainer.querySelector(".button-like");
  btnLike.addEventListener("click", () => {
  like(post.id).then (() => {
  const newLikes = post.likes.length+1;
  const numLikes = postContainer.querySelector(".numLikes-"+post.id);
  numLikes.innerHTML = newLikes;
  });
  
});
  

    const deleteBtn = postContainer.querySelector(".button-delete");
    deleteBtn.addEventListener("click", async () => {
      await postDelete(post.id);
      await readPosts();
    });

    return postContainer;
  };

  btnPost.addEventListener("click", async () => {
    const timeLine = postArea.innerHTMl;
    postArea.innerHTML = "";
    if (textPost.value === "") {
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

