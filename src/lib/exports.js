export {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup,
        sendPasswordResetEmail,
        signOut,
        onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js'; // eslint-disable-line

export {
        collection,
        addDoc,
        getFirestore,
        getDocs,
        orderBy,
        query,
        doc,
        deleteDoc,
        updateDoc,
        arrayUnion,
        arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js'; // eslint-disable-line

export {
        initializeApp,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
