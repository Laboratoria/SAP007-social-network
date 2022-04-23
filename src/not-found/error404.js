export default () => {
  const errorNotFund = document.createElement('div');
  errorNotFund.setAttribute('class', 'container-error');
  const templateErrorNotFund = `
    <p class='error-404'> Erro 404 ...</p>
    <p> Opss ...Página não encontrada, tente novamente ou <a href='#home'>Clique aqui</a> para ir para a Home.</p>
 
  `;
  errorNotFund.innerHTML = templateErrorNotFund;
  const link = document.getElementById('stylePages'); // Criando o caminho para o Css
  link.href = 'not-found/notfound.css';
  return errorNotFund;
};
