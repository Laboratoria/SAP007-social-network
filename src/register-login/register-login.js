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

// Set up our register function
function register() {
  // Get all our input fields
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  // Validate input fields

  if (validadeEmail(email) === false || validatePassword(password) === false) {
    alert('Email ou Password vazios!');
    return;
    // Don't continue running the code
  }
  if (validateField(username) === false) {
    alert('Um ou dois campos estão vazios!');
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (){
      // Declare user variable
      let user = auth.currentUser;

      // Add this user to Firebase Database
      let databaseRef = database.ref();

      // Create User data
      let userData = {
        email: email,
        username: username,

        last_login: Date.now(),
      };

      // Push to Firebase Database
      databaseRef.child('users/' + user.uid).set(userData);

      // DOne
      alert('Usuária criada!');
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  // Validate input fields
  if (validadeEmail(email) == false || validatePassword(password) == false) {
    alert('Email ou Password vazios!');
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var databaseRef = database.ref();

      // Create User data
      var userData = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      databaseRef.child('users/' + user.uid).update(userData);

      // DOne
      alert('Usuária logada!');
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

// Validate Functions
function validadeEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
      return false;
  }
}

function validatePassword(password) {
  // Firebase only accepts lengths greater than 6
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
