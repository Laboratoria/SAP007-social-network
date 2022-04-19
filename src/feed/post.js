export function structuresPost(email, message, date) {
  const containerPost = document.createElement('li');

  const templatePosts = `
      <div class="div-post">
        <div class="organization">
          <p>${email}</p>
        </div>
        <div class="organization">
          <p>${date}</p>
        </div>
        <p>${message}</p>
        <div class="like-container">
        <img class="like-icon" src="../img/amor-verde.png"/> 
      </div>`;

  containerPost.innerHTML = templatePosts;

  return containerPost;
}
