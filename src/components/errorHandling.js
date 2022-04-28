export const errorHandlingGeneral = (error) => {
  let returnValue;

  switch (error.code) {
    case 'auth/invalid-email':
      returnValue = 'Campos obrigatórios';

      break;
    case 'auth/internal-error':
      returnValue = 'Campos obrigatórios';

      break;
    case 'auth/wrong-password':
      returnValue = 'Email ou senhas estão errados';

      break;
    case 'auth/user-not-found':
      returnValue = 'Usuário não cadastrado, registre-se!';

      break;
    case 'auth/user-disabled':
      returnValue = 'Não foi possivel logar com sua conta Google';
      break;

    case 'auth/popup-closed-by-user':
      returnValue = 'Não foi possivel logar com sua conta Google';
      break;
    default:
  }

  return returnValue;
};
