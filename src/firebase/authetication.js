import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { auth } from "../firebase/config-firebase.js";
export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("entrou", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errou", errorMessage);
        });
}






