// importando as funções que necessito
import { Register } from '../Components/Register.js';
import { Login } from '../Components/Login.js';
import { app } from './configurationfirebase.js';

// carregamento falha
const d = document;
d.addEventListener('DOMContentLoaded', Login);

// aqui exportaras las funciones que necesites
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
console.log(app);