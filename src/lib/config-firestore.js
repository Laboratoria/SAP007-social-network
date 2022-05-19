import "../lib/config-firebase.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    deleteDoc,
    doc,
    updateDoc
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

const db = getFirestore();

export async function addPosts(inputTitulo, inputPost) {
    try {
        const ref = await addDoc(collection(db, 'posts'), {
            inputTitulo,
            inputPost,
            date: new Date().toLocaleString('pt-br'),
            likes: [],
        });
        return ref.id;
    } catch (e) {
        return e;
    }
}

export const getPost = async () => {
    const arrayPosts = [];
    const queryFirestore = query(collection(db, 'posts'), orderBy('date'));
    const allPosts = await getDocs(queryFirestore);
    console.log(allPosts)
    allPosts.forEach((doc) => {
        const timeline = doc.data(); //ordenando por data
        arrayPosts.push({ ...timeline, id: doc.id });
    });
    return arrayPosts;
};