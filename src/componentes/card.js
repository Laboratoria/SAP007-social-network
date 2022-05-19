export const criarCard = (post) => {
    const divCard = document.createElement("div")
    divCard.innerHTML = `
    <div class="divPost">

    <div class="tItulo">${post.titulo}</div><br>

    <div class="pOst">${post.post}</div><br>
    <div class="linePost"></div>

    <button id="${post.id}" class="like" ></button><br>
     <i class="fa-regular fa-heart"></i>
    </button>

    <a class="icons" id="iconComent">
      <img src="../../img/comentar.png" width="36" height="36" />
    </a>      
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
        btnHeart.style.color = "grey"
      } else {
        btnHeart.style.color = "red"
      }
    })
    return divCard
}