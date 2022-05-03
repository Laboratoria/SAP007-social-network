import "../config-firebase.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";


//import { getFirestore, collection, addDoc, getDocs } 
// o addDoc é pra adicionar e o get pra ler dados get só inicializa banco

//inicializa servicos
const db = getFirestore(app);

//const que faz referencia ao banco criado lá no console do firestore
const collectionRef = collection (db, 'posts');

//apenas para confirmar que está lendo minha primeira postagem
export function lerPost () {
getDocs(collectionRef)
    .then((snapshot) => {
        console.log(snapshot.docs);
    })
}