export default () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const feed = document.createElement('div');
  const container = `
  <form class="form-area" id="post-container">
        <textarea type="text" class="post-area" placeholder=" Conte para nós sua experiência" name="mensagem"
          id="mensagem"></textarea>
        <button type="submit" class="post-btn" id="btn-postar">Postar</button>
      </form>
      `;

  feed.innerHTML = container;
  return feed
}
