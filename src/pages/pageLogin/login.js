export default () => {
    const container = document.createElement('div');
     
    const infoLogin = `
    <div class="container">
      <div class="content first-content">
        <div class="first-column">
          <img src="./meditacao (1).png" id="image">
          <h1>ZAZEN</h1>
        </div>
        <div class="second-column">
          <h2>log In</h2>
          <form class="form">
            <label class="label-input">
              <i class="fa-regular fa-envelope icon-modify"></i>
            <input type="email"placeholder="E-mail">
            </label>
            <label class="label-input">
              <i class="fa-solid fa-lock icon-modify"></i>
            <input type="password" placeholder="Password">
            </label>
            <button class="btn btn-primary">Log in</button>
            <button class="btn btn-second" type="submit">Sign Up</button>
            <div class="alternative">
              <span>Continue with</span>
            </div>
            <button class="btn btn-google" type="submit">
              <img src="./google (1).png" id="google">
            </button>
          </form>
        </div>
      </div>
    </div>
    `
    container.innerHTML = infoLogin;

    return container;
}