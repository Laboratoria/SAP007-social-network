export default () => {

  const container = document.createElement('div')
  container.classList.add('containerMain')

  const template = `
  <h1 class="titleHome">Comente seus filmes favoritos</h1>
  <div class="containerAbout">
    <p>O Pop Time é uma rede social onde é possível recomendar, criticar, e
      ter acessor aos filmes e séries que desejamos por meio de compartilhamentos de todos os amantes da mídia</p>
    <div class="carrosel">
    <ul>
      <li>
        <img class="imgCarrosel" src="./pages/img/interestelar.jpg">
      </li>
      <li>
        <img class="imgCarrosel" src="./pages/img/breackingbad.jpg">
      </li>
      <li>
        <img class="imgCarrosel" src="./pages/img/coraline.jpg">
      </li>
      <li>
        <img class="imgCarrosel" src="./pages/img/harrypotter.jpg">
      </li>
      <li>
        <img class="imgCarrosel" src="./pages/img/peakyblinders.jpg">
      </li>
    </ul>
  </div>
  </div>
  <div id="enter" class="enter">
    <button>Log-in</button>
    <button>Cadastre-se</button>
  </div>
  `;

  container.innerHTML = template
  return container
}