export function createNewComment() {
  const template = `
      <section class="add-comments">
        <div class="line-post"></div>
        <textarea class="comment-input" autocomplete="on" minlength="1" maxlength="1000" placeholder="Escreva um comentário...">
        </textarea>
      <section>
    `;

  return template;
}
