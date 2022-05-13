import {
  createPost,
  getPosts,
  like
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

  const templateFeed = (text) => { //array de likes
    return `
    <div class= "box-feed">
    <ul class= "box-inside">
    <li>
    <p class="placeText">${text}</p>
    </li>
    <button type="button" id="button-like" class="button-like">
    <img src="./images/like.png" class="btn-like" width="30px"/>
    </button>
  </ul>
  </div>
  `
  }
/*<p id="numLikes" class="numLikes">${post.like.length}</p>*/

  btnPost.addEventListener("click", async () => {
    const timeLine = postArea.innerHTML;
    postArea.innerHTML = "";
    if (textPost.value === "") {
      msgError.innerHTML = "Opa, digite sua mensagem!";
    } else; {
      await createPost(textPost.value);
      postArea.innerHTML += templateFeed(textPost.value)

      postArea.innerHTML += timeLine;
    }
  });

  const readPosts = async () => {
    const allPost = await getPosts();

    allPost.forEach((post) => {
      document.querySelector("#posts").innerHTML += templateFeed(post.textPost);
    })
  };
  readPosts()
  return container;
}

const btnLike = document.querySelector("#button-like");
btnLike.forEach((like) => {
  like.addEventListener("click", (e) => {
    e.prevemtDefault();
  });
})
