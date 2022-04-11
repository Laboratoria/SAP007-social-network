import { 
  getFirestore,
  collection, 
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  //updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
//import { TestWatcher } from "jest"; imports adicionados depois do npm install firebase@9.4.1 --save
//import { async } from "regenerator-runtime";

const db = getFirestore();

/*os dados são armazenados nos Documentos, que são armazenados nas coleções - ao criar os dados,
o Cloud Firestore já cria coleções e documentos de modo implícito na primeira vez.*/


//o async faz a função retornar uma promise
//o await faz a função esperar uma promise
//try define um bloco de código para ser executado (para tentar).
//catch define um bloco de código para lidar com qualquer erro.

//codigo para criar uma nova coleção e documento
export async function newPost(message){
  try {
    console.log(message)
    const docRef = await addDoc(collection(db, "posts"), {
      message: message,
      date: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
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
