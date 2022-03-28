import { enviarRegistro, loginGoogle } from '../firebase/firebase-auth.js';
import { termosEPolitica } from './Termos.js';
import { Logo } from './Logo.js';
import { Eslogan } from './Eslogan.js';

export const Registro = () => {
  const root = document.getElementById('root');
  root.classList.add('main-container');

  const register = document.createElement('div');
  register.classList.add('register-container');

  const logoContainer = Logo();
  const eslogan = Eslogan('Junte-se à comunidade:');

  const inputsContainer = document.createElement('div');
  inputsContainer.classList.add('inputs-container');

  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form-register';

  // ---------------------

  const formInputContainerNome = document.createElement('div');
  formInputContainerNome.classList.add('form__input-container');
  const iconName = document.createElement('span');
  iconName.classList.add('icon-user');
  iconName.classList.add('form__icon');
  iconName.classList.add('form__icon--black');
  const formInputName = document.createElement('input');
  formInputName.classList.add('form__input');

  formInputName.type = 'text';
  formInputName.id = 'rname';
  formInputName.name = 'Nome';
  formInputName.placeholder = 'Nome';

  formInputContainerNome.append(iconName);
  formInputContainerNome.append(formInputName);

  // ---------------------

  const formInputContainerEmail = document.createElement('div');
  formInputContainerEmail.classList.add('form__input-container');
  const iconMail = document.createElement('span');
  iconMail.classList.add('icon-mail');
  iconMail.classList.add('form__icon');
  iconMail.classList.add('form__icon--black');
  const formInputFirst = document.createElement('input');
  formInputFirst.classList.add('form__input');
  formInputFirst.type = 'email';
  formInputFirst.id = 'remail';
  formInputFirst.name = 'remail';
  formInputFirst.placeholder = 'Email';

  formInputContainerEmail.append(iconMail);
  formInputContainerEmail.append(formInputFirst);

  const formInputContainerPassword = document.createElement('div');
  formInputContainerPassword.classList.add('form__input-container');
  const iconLock = document.createElement('span');
  iconLock.classList.add('icon-lock');
  iconLock.classList.add('form__icon');
  iconLock.classList.add('form__icon--black');
  const formInputSecond = document.createElement('input');
  formInputSecond.classList.add('form__input');
  formInputSecond.type = 'password';
  formInputSecond.id = 'rpassword';
  formInputSecond.name = 'rpassword';
  formInputSecond.placeholder = 'Senha';

  formInputContainerPassword.append(iconLock);
  formInputContainerPassword.append(formInputSecond);

  form.append(formInputContainerNome);
  form.append(formInputContainerEmail);
  form.append(formInputContainerPassword);

  const errorContainer = document.createElement('div');
  errorContainer.classList.add('err-container');

  // aquiiii
  const msgError = document.createElement('small');
  msgError.classList.add('error-msg');
  msgError.id = 'errorLogin';
  msgError.textContent = '';

  errorContainer.append(msgError);

  const btn = document.createElement('div');
  btn.classList.add('btn');
  btn.id = 'submit-register';
  btn.addEventListener('click', enviarRegistro);
  btn.href = '/#timeline';
  const ingresar = document.createElement('span');
  ingresar.classList.add('btn__text');
  ingresar.textContent = 'Registrar-se';

  btn.append(ingresar);

  const btnG = document.createElement('div');
  btnG.classList.add('btn-g');
  btn.href = '/#nada';
  const googleIcon = document.createElement('span');
  googleIcon.classList.add('icon-google');
  googleIcon.classList.add('form__icon');

  const span1 = document.createElement('span');
  span1.classList.add('path1');
  const span2 = document.createElement('span');
  span2.classList.add('path2');
  const span3 = document.createElement('span');
  span3.classList.add('path3');
  const span4 = document.createElement('span');
  span4.classList.add('path4');
  const span5 = document.createElement('span');
  span5.classList.add('path5');
  const span6 = document.createElement('span');
  span6.classList.add('path6');

  googleIcon.append(span1);
  googleIcon.append(span2);
  googleIcon.append(span3);
  googleIcon.append(span4);
  googleIcon.append(span5);
  googleIcon.append(span6);

  const google = document.createElement('span');
  google.textContent = 'Continuar com Google';
  google.addEventListener('click', loginGoogle);

  btnG.append(googleIcon);
  btnG.append(google);

  const linkLogIn = document.createElement('div');
  linkLogIn.id = 'linkLogin';
  linkLogIn.classList.add('redirect-text');

  const spanAsk = document.createElement('span');
  spanAsk.textContent = 'Já tem uma conta?';
  spanAsk.classList.add('redirect-text__left');
  const link = document.createElement('span');
  link.classList.add('redirect-text__link');
  link.id = 'log-in';

  link.textContent = 'Iniciar sessão';
  link.addEventListener('click', () => {
    window.location.hash = '#/';
  });

  linkLogIn.append(spanAsk);
  linkLogIn.append(link);

  // Terminos y Condiciones
  const termsContainer = document.createElement('div');
  termsContainer.id = 'termsAndConditions';
  termsContainer.classList.add('redirect-text');

  const terminosText = document.createElement('span');
  terminosText.textContent = 'Ao continuar aceito os ';
  terminosText.classList.add('redirect-text__left-small');

  const terminosLink = document.createElement('span');
  terminosLink.textContent = 'Termos de Serviço e Política de Privacidade';
  terminosLink.classList.add('redirect-text__link');
  terminosLink.classList.add('redirect-text__link--noMarginLeft');
  terminosLink.classList.add('redirect-text__link-small');

  termsContainer.append(terminosText);
  termsContainer.append(terminosLink);

  inputsContainer.append(form);
  inputsContainer.append(termsContainer);
  inputsContainer.append(errorContainer);
  inputsContainer.append(btn);
  inputsContainer.append(btnG);
  inputsContainer.append(linkLogIn);

  register.append(logoContainer);
  register.append(eslogan);
  register.append(inputsContainer);

  const { termosContainer, abrirModal } = termosEPolitica();

  register.append(termosContainer);

  terminosLink.addEventListener('click', (e) => {
    e.preventDefault();
    abrirModal();
  });

  return register;
};
