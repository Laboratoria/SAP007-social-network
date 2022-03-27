import { getCurrentUser } from '../lib/librariesfirebase.js';

export const Home = () => {
  const user = getCurrentUser();
  const userName = user.displayName;

  document.getElementById('root').innerHTML = `
  <h1>Bem-vinda de volta, Grrl! ${userName}!</h1>`;
};

//Fazer feed sprint 3