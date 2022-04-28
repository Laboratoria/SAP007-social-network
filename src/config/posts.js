import { collection, addDoc } from "./export.js";
import { db, auth } from "./start-firebase.js";

export function createNewPost(newText) {
  try {
    if(newText.length == 0) {
      // colocar mensagem avisando que não tem texto na postagem
      return;
    }

    const postsCollection = collection(db, "posts");
    const newPost = {
      userId: auth.currentUser.uid,
      text: newText,
      like: 0,
    };

    addDoc(postsCollection, newPost)
      .then(() => {
        window.location.hash = "#feed";
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export function getPosts() {
    // recuperar posts do firebase
}
