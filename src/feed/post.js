export function structuresPost(item) {
  const containerPost = document.createElement('li');
  // componente para pegar as informações de quem postou
  const templatePosts = `
      <div class='div-post'>
        <div class='information-organization'>
          <p>${item.userEmail}</p> 
        </div>
        <div class='information-organization'>
          <p>${item.date}</p>
        </div>
        <p>${item.message}</p>
        <div class='like-container'>
        <img class='like-icon' src='../src/img/amor-verde.png'/>
        </div>
      </div>`;

  containerPost.innerHTML = templatePosts;

  return containerPost;
}
