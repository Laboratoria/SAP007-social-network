import { collection, addDoc, onAuthStateChanged } from './export.js';
import { auth, db } from './start-firebase.js';

export async function userCollection(socialName, email, id) {
  await addDoc(collection(db, 'user'), {
    socialName: socialName,
    userEmail: email,
    userId: id,
  });
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
