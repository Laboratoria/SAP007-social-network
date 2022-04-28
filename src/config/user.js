import { auth, db } from './start-firebase.js';
import { collection, addDoc, onAuthStateChanged } from './export.js';

export async function userCollection(name, email, id) {
  try {
    const user = {
      socialName: name,
      userEmail: email,
      userId: id,
    };
    const docRef = await addDoc(collection(db, 'user'), user);
    return docRef;
  } catch (e) {
    return e;
  }
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}
