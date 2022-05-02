export function createAddComment() {
  const template = `
      <section class="add-comments">
        <div class="line-post"></div>
        <textarea class="add-comment-input" autocomplete="on" rows="1" cols="70" spellcheck="true" wrap="hard" placeholder="Escreva um comentário..."></textarea>
      <section>
    `;

  return template;
}
