export default () => {
  const container = document.createElement('div');
  container.id = 'container-landing';
  container.innerHTML = `
    <div id="logo"> 
        <img src="./images/meditacao (1).png" />
        <h1>ZAZEN</h1>
    </div>
    <div id="button-group">
        <form>
            <button id="btn-login" class="btn btn-primary">LOG IN</button>
            <button class="btn btn-secondary">REGISTER</button>
        </form>
    </div>
    `;
  container.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.submitter != null) {
      if (event.submitter.id === 'btn-login') {
        window.location.hash = '#login';
      } else {
        window.location.hash = '#register';
      }
    }
  });
  return container;
};
