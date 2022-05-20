export const criarCard = (post) => {
  const divCard = document.createElement("div")
  divCard.innerHTML = `
  <div class="divPost">

  <div class="tItulo">${post.titulo}</div><br>

  <div id="data${post.id}" class="date" >${post.date}
  </div>

  <hr><br>
  <div class="post">${post.post}</div>
  <div class="linePost"></div><br>
  <hr>

  <button id="${post.id}" class="like">
  <i class="fa-brands fa-gratipay"></i>
  </button>

  <a class="icons" id="iconEdit">
   <img src="../../img/editar.png" width="36" height="36" />
  </a>    
  
  <a class="icons" id="iconDelete">
    <img src="../../img/excluir.png" width="36" height="36" />
  </a>
  </div>
`
  const btnHeart = divCard.querySelector(".like")
  btnHeart.addEventListener("click", () => {
    if (btnHeart.style.color == "red") {
      btnHeart.style.color = "black"
    } else {
      btnHeart.style.color = "red"
    }
  })
  return divCard
}