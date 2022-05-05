
export function publishingPosts(post) {
  const templatePost = document.createElement("div");
  templatePost.classList.add("body-template-post");

  const time = post.date;
  const formatDate = new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  const date = formatDate.toLocaleDateString ("pt-br")

  templatePost.innerHTML = `    
      <div class="section-post-published">
        <p class="username-post">${post.author}</p>
        <p class="date-post">${date}</p>
        <p class="HQ-title-post">${post.titleHQ}</p>
        <p class="message-post">${post.message}</p>
        <div class="likes-post">
          LIKE
        </div>
      </div>
    `;

  return templatePost
}

