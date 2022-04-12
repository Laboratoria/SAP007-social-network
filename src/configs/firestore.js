import { 
  getFirestore,
  collection, 
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  //updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import { auth } from "./authentication.js";

const db = getFirestore();

/*os dados são armazenados nos Documentos, que são armazenados nas coleções - ao criar os dados,
o Cloud Firestore já cria coleções e documentos de modo implícito na primeira vez.*/

//o async faz a função retornar uma promise
//o await faz a função esperar uma promise
//try define um bloco de código para ser executado (para tentar).
//catch define um bloco de código para lidar com qualquer erro.

//codigo para criar uma nova coleção e documento
export async function newPost(message, user){
  try {
    user = auth.currentUser;
    const post = {
      message: message,
      displayName: user.displayName,
      date: new Date(),
    }  
    const docRef = await addDoc(collection(db, "posts"),post)
    console.log("Document written with ID: ", docRef.id);
    return post;
  } 
  catch (e) {
    console.log("Error adding document: ", e);
  } 
}

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

export const allPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  let arrayOfPosts = [];
  querySnapshot.forEach((doc) => {
    const posts = doc.data();
    arrayOfPosts.push(posts);
  });
  return arrayOfPosts;
}


//Editar post
/*const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true
});*/
