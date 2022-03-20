const firebaseConfig = {
  apiKey: 'AIzaSyDYuZfFIZPCxXmDcw9j3_dlkuyM-57OKWA',
  authDomain: 'girl-talk-app.firebaseapp.com',
  databaseURL: 'https://girl-talk-app-default-rtdb.firebaseio.com',
  projectId: 'girl-talk-app',
  storageBucket: 'girl-talk-app.appspot.com',
  messagingSenderId: '994363584873',
  appId: '1:994363584873:web:6cf262fb179661b8b00df8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Config funcao register 
function register() {
  // Pegar todos os campos input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  // Validar campos input

  if (validadeEmail(email) === false || validatePassword(password) === false) {
    alert('Email ou Password vazios!');
    return;
    
  }
  if (validateField(username) === false) {
    alert('Um ou dois campos estão vazios!');
    return;
  }

  // Continuacao com o authentication
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (){
      // Declarar user variavel
      let user = auth.currentUser;

      // Add esse user ao Firebase Database
      let databaseRef = database.ref();

      // Criar dados do User 
      let userData = {
        email: email,
        username: username,

        last_login: Date.now(),
      };

      // Enviar para Firebase Database
      databaseRef.child('users/' + user.uid).set(userData);

     
      alert('Usuária criada!');
    })
    .catch(function (error) {
      // Firebase usará aqui para acusar erros
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

// Config funcao login 
function login() {
  // Pegar os campos input 
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  // Validar campos input 
  if (validadeEmail(email) == false || validatePassword(password) == false) {
    alert('Email ou Password vazios!');
    return;
    
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declarar user variaveis
      var user = auth.currentUser;

      // Add esse user ao Firebase Database
      var databaseRef = database.ref();

      // Criar dados do user
      var userData = {
        last_login: Date.now(),
      };

      // Enviar para Firebase Database
      databaseRef.child('users/' + user.uid).update(userData);

      
      alert('Usuária logada!');
    })
    .catch(function (error) {
      // Firebase usará aqui para acusar erros
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

// Validar Funcoes
function validadeEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    
    return true;
  } else {
      return false;
  }
}

function validatePassword(password) {
  // Firebase manda msg automatica que só aceita acima de 6 caracteres
  if (password < 6) {
    return false;
  }
}

function validateField(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  }
}
