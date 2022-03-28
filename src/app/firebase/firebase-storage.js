import {
  storage,
  uploadBytes,
  ref,
  getDownloadURL,
} from './firebase-initializer.js';

// ------------Subir imagen en post  -------------

const postPath = 'posts';

export function uploadImage(file, userId) {
  const fileName = file.name;
  const imageRef = ref(storage, `${postPath}/${userId}/${fileName}`);
  return uploadBytes(imageRef, file).then((snapshot) => getDownloadURL(snapshot.ref));
}

// ------------Subir imagen de perfil del usuario -------------

const userPath = 'users';

export function uploadUserProfileImg(file, userId) {
  const fileName = file.name;
  const imageRef = ref(storage, `${userPath}/${userId}/${fileName}`);

  return uploadBytes(imageRef, file).then((snapshot) => getDownloadURL(snapshot.ref));
}
