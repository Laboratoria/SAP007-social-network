export {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

export {
    collection,
    getDocs,
    addDoc,
    query,
    deleteDoc,
    doc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDoc
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

export {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";