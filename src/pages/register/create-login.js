import { getAuth, createUserWithEmailAndPassword }
  // eslint-disable-next-line
  from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const createRegister = getAuth();

export function register(email, senha) {
  return createUserWithEmailAndPassword(createRegister, email, senha);
}
