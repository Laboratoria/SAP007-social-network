import { 
  getFirestore,
  collection, 
  addDoc,
  orderBy,
  query,
  deleteDoc,
  getDocs,
  updateDoc,
  doc,
  where
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import { auth } from "./authentication.js";

export const db = getFirestore();

/*os dados são armazenados nos Documentos, que são armazenados nas coleções - ao criar os dados,
o Cloud Firestore já cria coleções e documentos de modo implícito na primeira vez.*/

//o async faz a função retornar uma promise
//o await faz a função esperar uma promise
//try define um bloco de código para ser executado (para tentar).
//catch define um bloco de código para lidar com qualquer erro.

export async function newPost(message){
  const displayName = auth.currentUser.displayName;
  const uid = auth.currentUser.uid
  try {
    const post = {
      message: message,
      displayName: displayName,
      likes: [],
      date: new Date().toLocaleString("pt-br"),
      userId: uid
    }  
    const docRef = await addDoc(collection(db, "posts"),post)
    console.log("Document written with ID: ", docRef.id); 
    return post;
  } 
  catch (e) {
    console.log("Error adding document: ", e);
  } 
}

/*export const getLikesPost = (postId) => {
  createUserWithEmailAndPassword(auth, email, password)*/
  
/*export const getLikesPost = async (postId,likes) => {
  try{  
    const postLiked = doc(db, 'posts', postId)
    const user = auth.currentUser.uid
    console.log(likes) 
    console.log(likes.includes(user))
    if(likes.includes(user)) {
      const indexOfUser = likes.indexOf(user);
      likes.splice(indexOfUser, 1);
      await updateDoc(postLiked, {
        likes: likes
      });
      return likes
    } else {
      likes.push(user)
      await updateDoc(postLiked, {
        likes: likes
      });
      return likes
    }
  }  
  catch (e) {
    console.log("Error", e);
  }
}*/

export const getLikesPost = async (postId,likes) => {
  try{  
    const postLiked = doc(db, 'posts', postId)
    await updateDoc(postLiked, {
      likes: likes
    });
    console.log(likes)
    return likes 
  }  
  catch (e) {
    console.log("Error", e);
  }
}



//cria uma nova coleção - cada user é um documento
export async function collectUsers(email, displayName){
  try {
    const user = {
      userEmail: email,
      displayName: displayName
    };
    const docRef = await addDoc(collection(db, "users"),user)
    console.log("Document written with ID: ", docRef.id);
    return user;
  } 
  catch (e) {
    console.log("Error adding document: ", e);
  } 
}

//para ver todos os documentos de "posts"
export const allPosts = async () => {
  let arrayOfPosts = [];
  const sortingPosts = query(collection(db, "posts"), orderBy("date", "desc"))
  const querySnapshot = await getDocs(sortingPosts);
  querySnapshot.forEach((doc) => {
    const posts = doc.data();
    const postId = doc.id;
    posts['id'] = postId;
    arrayOfPosts.push(posts);
  });
  return arrayOfPosts;
}

export const getUserPosts = async (id) => {
  id = auth.currentUser.uid;
  let arrayOfMyPosts = [];
  const clause = where("userId", "==", id)
  const querySnapshot = query(collection(db, "posts"),clause);
  const test = await getDocs(querySnapshot)
  test.forEach((doc) => {
    const post = doc.data();
    arrayOfMyPosts.push(post)
  })
  return arrayOfMyPosts;
}

//Editar post
/*const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true
});*/
