// função "route" para lidar com o comportamento padrão do link e alterações locais
const route = (event) => {
  event = event || window.event;
  // capturar o evento click para o link, o qual precisaremos para chamar o "preventDefault"
  event.preventDefault();
  /* previne que a âncora <a> performe seu comportamento padrão
  de navegar para o destino do link. */
  window.history.pushState({}, "", event.target.href);
  /* usa a "história" API do navegador ao chamar o "pushState, e passando os valores
  das âncoras "href" como o terceiro argumento. Isso irá atualizar os links
  no navegadoro */
  handleLocation();
};

/* criar um objeto que tem caminhos possíveis como nossas chaves
e o arquivo html para exibir esses caminhos como o valor */
const routes = {
  "/home": "src/pages/home.html",
  "/register": "src/pages/register-and-login.html",
  "/login": "src/pages/login.html",
  "/about": "src/pages/about.html",
};

// função para lidar, de fato, com a mudança de nossa localização
const handleLocation = async () => {
  const path = window.location.pathname;
  /* precisaremos capturar nosso nome do caminho do local atual.
  Para isso, definir rotas para esse caminho: linha 15 */
  const route = routes[path];
  /* assim que encontrar as rotas, usaremos o nome do
    caminho para encontrar nossa rota desejada.  */

  const html = await fetch(route).then((data) => data.text());
  /* em seguida, precisamos carregar o html para nossa rota.
  Usaremos uma chamada fetch para isso. É feita uma simples
  chamada para o "fetch" (buscar), passando nossa rota como o único argumento.
  Depois ("then") transformamos nossa resposta para text  */
  document.getElementById("main-page").innerHTML = html;
  /* agora que temos o html que queremos carregar, podemos atribuí-lo
  ao innherHTML do nosso container da página  */
};

window.onpopstate = handleLocation;
window.route = route;
/* precisamos lidar com a funcionalidade de roteamento do navegador e o primeiro
carregamento da página. Vamos chamar handleLocation para o evento "window.onpopstate"
que será manipulado quando os usuários clicarem nos botões "avançar" e "voltar do navegador" */

handleLocation();
/* precisamos fazer uma chamada para handleLocation em nosso carregamento de página para carregar 
a página correta para qualquer rota em que o usuário chegar primeiro.
E, por último, precisamos chamá-lo toda vez que chamamos nossa função "route".

Assim, terminará a substituição do comportamento padrão do nosso link para rotear
dentro do nosso aplicativo. */
