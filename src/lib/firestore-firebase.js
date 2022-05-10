import {
  collection,
  getDocs,
  addDoc,
  query

} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
import {
  db
} from "./config-firebase.js"
import {
  auth
} from "./authentication.js"


export const createPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      textPost,
      userEmail: auth.currentUser.email,
      message: textPost,
      data: new Date(),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      likes: [],
    });

    return docRef;
  } catch (e) {
    console.log('Post não publicado', e);
  }
};

export const getPosts = async() =>{
  console.log("cheguei")
  try {
    const posts = []
    const q = query(collection(db, "post"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const post = doc.data()
      post.id = doc.id
     posts.push(post)
      console.log(post);
    });
   return posts
  } catch (error) {

  }


}
