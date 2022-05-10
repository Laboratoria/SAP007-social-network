import {
  createPost
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



  const postArea = container.querySelector("#posts")
  const btnPost = container.querySelector("#post-button")
  const textPost = container.querySelector("#post-text")
  const msgError = container.querySelector("#msg-error")


  btnPost.addEventListener("click", async () => {
    const timeLine = postArea.innerHTML;
    postArea.innerHTML = "";
    if (textPost.value === "") {
      msgError.innerHTML = "Opa, digite sua mensagem!";
    } else; {
      await createPost(textPost.value);
      postArea.innerHTML += `
  <div class= "postArea" id="postArea">
  <p>${textPost.value}</p>
  </div>
  `
      postArea.innerHTML += timeLine
    }
  });

  return container;

};
