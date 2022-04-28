import { auth, db } from './start-firebase.js';
import { collection, addDoc, onAuthStateChanged } from './export.js';

export async function userCollection(socialName, email, id) {
  try {
    const docRef = await addDoc(collection(db, 'user'), {
      socialName: socialName,
      userEmail: email,
      userId: id,
    });
    return docRef.id;
  } catch (e) {
    return null;
  }
}

export function authChange() {
  return onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      user.socialName;
      user.email;
      user.id;
    }
  });
}
