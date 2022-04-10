import '../firebase/firebaseconfig.js';

export const timeline = () => {
  const feed = document.createElement('div');
  const templateFeed = `
    <p> Olá </p>
 `;
  feed.innerHTML = templateFeed;
  return feed;
};
