export const timeline = () => {
  const feedCreate = document.createElement('div');
  const templateFeed = `
      <main class="home-container">
      <h2> TESTE FEED </h2>
      </main>
    `;

  feedCreate.innerHTML = templateFeed;
  return feedCreate;
};
