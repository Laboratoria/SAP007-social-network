import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const db = getFirestore(app);

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

export const publicatedPost = async(valueTitle,valueText,data) =>{
try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: valueTitle.value,
      text: valueText.value,
      data: new Date()
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});