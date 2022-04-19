import { getFirestore,
    collection,
    addDoc,
    getDocs } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'

const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
    try {
        const docRef = await addDoc(collection(db, "post"), {
            textPost: textPost,
            userEmail: userEmail,
            date: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getPost = async () => {
    const arrPost = [];
    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
        const timeline = doc.data();
        // console.log(`${doc.id} => ${doc.data()}`);
        arrPost.push(timeline);
    });
    return arrPost;
}

// const createPost = async (e) => {
//     e.preventDefault();
//     const uid = auth.currentUser.uid;
//     const ref = firestore.collection('users').doc(uid).collection('posts').doc(slug)

//     export const createPost = async (textPost, userEmail) => {
//         try {
//             const docRef = await addDoc(collection(db, "post"), {
//                 textPost: textPost,
//                 userEmail: userEmail,
//                 date: new Date(),
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }
