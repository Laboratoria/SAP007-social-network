import { collection, addDoc, onAuthStateChanged } from "./export.js";
import { auth, db } from "./start-firebase.js";

export async function userCollection(socialName, email, id) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      socialName: socialName,
      userEmail: email,
      userId: id,
    });
    return;
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export function authChange() {
  return onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const socialName = user.socialName;
      const email = user.email;
      const id = user.id;
    }
  });
}

/*
//criando uma referencia específica
const alovelaceDocumentRef = doc(db, "users", "alovelace");

//global
const usersCollectionRef = collection(db, "users");

//subcoleção --> sentido hierarquia messages está dentro de roomA (leia da direita para esquerda)
const messageRef = doc(db, "rooms", "roomA", "messages", "message1");


//lendo dados
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

*/
/*
criar coleção do usuário
criar post - incluir data e hora
recuperar dados do post
editar e excluir post
curtir post
*/
