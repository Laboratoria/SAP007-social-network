export function createAddComment() {
  const container = document.createElement('section');
  container.setAttribute('class', 'add-comments');
  container.innerHTML = `
      <section class="add-comments">
        <div class="line-post"></div>
        <textarea class="add-comment-input" autocomplete="on" rows="1" cols="70" spellcheck="true" wrap="hard" placeholder="Escreva um comentário..."></textarea>
      <section>
    `;
  return container;
}
