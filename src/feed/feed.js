import '../firebase/firebaseconfig.js';

export const timeline = () => {
  const feed = document.createElement('div');
  const link = document.getElementById('stylePages');
  link.href = 'feed/feed.Css';
  const templateFeed = `
    <p> Olá </p>
 `;
  feed.innerHTML = templateFeed;
  return feed;
};
