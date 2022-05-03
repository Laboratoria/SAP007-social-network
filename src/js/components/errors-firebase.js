export function errorsFirebase(error) {
  const message = document.querySelector('#message');
  switch (error) {
    case 'auth/email-already-in-use':
      message.innerHTML = 'Email já cadastrado!<br>Escolha outro email.';
      break;
    case 'auth/weak-password':
      message.innerHTML = 'Sua senha deve ter no<br> mínimo 6 caracteres.';
      break;
    case 'auth/user-not-found':
      message.innerHTML = 'Usuário não encontrado!<br>Crie um cadastro na LabFriends!';
      break;
    case 'auth/wrong-password':
      message.innerHTML = 'Senha errada!<br>Digite novamente!';
      break;
    default:
  }
}

export function errorsFirebaseModal(error) {
  const messageReset = document.querySelector('#message-reset');
  switch (error) {
    case 'auth/user-not-found':
      messageReset.innerHTML = 'Usuário não encontrado!<br>Cadastre-se no LabFriends!';
      break;
    case 'auth/missing-email':
      messageReset.innerHTML = 'Preencha o campo de email!';
      break;
    default:
  }
}
