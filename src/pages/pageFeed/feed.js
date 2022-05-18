import {
    getAuth,
    signOut,
  } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';
  
  export default () => {
    const container = document.createElement('div');
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (user) {
      container.innerHTML = `<div>
          ${user.email}
        </div>
        <form>
          <button class = "btn btn-primary">logout</button>
        </form>
        `;
      container.addEventListener('submit', (event) => {
        event.preventDefault();
        signOut(auth)
          .then(() => {
            window.location.hash = '#login';
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      window.location.hash = '#login';
    }
    return container;
  };