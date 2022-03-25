export default () => {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `
  <div id="content_container">
  <div id="form_container">
    <div id="form_header_container">
      <h2 id="form_header">Login ou Registro</h2>
    </div>

    <div id="form_content_container">
      <div id="form_content_inner_container">
        <input type="username" id="username" placeholder="Username" />
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <div id="button_container">
          <button type="submit" onclick="login()">Login</button>
          <button type="submit" onclick="register()">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
    `;

  return container;
};
