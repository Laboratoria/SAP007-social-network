export default () => {
  const register = document.createElement('div');
  register.classList.add('containerA');
  const templateRegister = `


  <div class="center">
  <div class=banner> 
    
  </div>
  <div class="container-fluid">
    <p class="wellcome"> Cadastro</p>
    <form action="#" id="sign-in-form" class="sign-in-form">
      <input class= "inputs" type="text" placeholder="Nome" id="name"/>
      <input class= "inputs" type="email" placeholder="Email" id="email"/>
      <input class= "inputs" type="password" placeholder="Senha" id="password"/>      
      <input class="btnEnter" type="submit" value="register" id="Cadastrar"/>
    </form>
    <p class="wellcome"> Já tem cadastro ? <a href="">Faça o Login</a></p>
  </div>
  </div>
  `;

  register.innerHTML = templateRegister;
  return register;
};
