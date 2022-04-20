import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
//Login de novos usuários

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  console.log(auth)
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  const auth = getAuth(app);