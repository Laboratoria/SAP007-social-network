//import "../lib/config-firebase.js";
export default () => {
  const container = document.createElement("section");
  const template = `
   <section id="post" class="post">
   <div class="container-template">
   <p class="tip">Sua dica de leitura:
   <textarea id="post-text" class="post-text" rows="5" cols="55" maxlength="180" placeholder="Escreva aqui"></textarea>
   <button type="submit" id="post-button" class="post-button">Enviar</button>
   </div>
   </section>
   <section id="posts" class="posts">
   <ul id="posts-list" class="posts-list"></ul>
   </p>
   </section>
   `;
  container.innerHTML = template;
  return container;

}
