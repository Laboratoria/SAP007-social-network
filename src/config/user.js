import { auth, db } from './start-firebase.js';
import { collection, addDoc, getDocs, onAuthStateChanged } from './export.js';

export async function createNewUser(name, email, id) {
  try {

    const datas = await getDocs(collection(db, "users"));

    let hasUser = false;

    datas.forEach((user) => {
      if(user._document.data.value.mapValue.fields.userId.stringValue === id) {
        hasUser = true;
      }
    });

    if(hasUser) {
      return user;
    }
    else {
          const newUser = {
            socialName: name,
            userEmail: email,
            userId: id,
          };
          const docRef = await addDoc(collection(db, 'users'), newUser);
          return docRef;
    }

  } catch (e) {
    return e;
  }
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}
