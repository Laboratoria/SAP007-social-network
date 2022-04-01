//import {} from "../../configs/authentication.js";

export default () => {
    const container = document.createElement("div");
    container.classList.add("content-feed")
    
    const templateFeed = `
    
    <header class="cabecalho">
    <img class="cabecalho-imagem" src="./img/logo3.png" alt="logo">
    <nav class="cabecalho-menu">
        <a class="cabecalho-menu-item" href="#">Sobre nós</a>
        <a class="cabecalho-menu-item" href="#">Meu Perfil</a>
        <input class="cabecalho-menu-item input-search" type="search" id="input-search "placeholder="Pesquisar poemas...">
        <a class="cabecalho-menu-item link-login" href="#login">Sair</a>
    </nav>
    </header>
    
    <main class="conteudo">
        <div class="escreverPost conteudo-principal" id="escreverPost">
            <h1>Bem-vindo(a), poeta!</h1>
        <textarea class="input-text" id="textarea" placeholder="Escreva seu poema aqui"></textarea>
        <button class="btn-publicar" id="btn-publish" type="submit"> Publicar </button>
        </div>
        <div class="publicacoes" id="publicacoes">
            poemas postados aqui...
        </div>
    </main> 
    `;
    
    container.innerHTML = templateFeed;
    



    return container;
}

