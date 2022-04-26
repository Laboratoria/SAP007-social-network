export const errorHandlingGeneral = (error) => {
  let valorRetorno;

  switch (error.code) {
    case 'auth/invalid-email':
      valorRetorno = 'Campos obrigatórios';

      break;
    case 'auth/internal-error':
      valorRetorno = 'Campos obrigatórios';

      break;
    case 'auth/wrong-password':
      valorRetorno = 'Email ou senhas estão errados';

      break;
    case 'auth/user-not-found':
      valorRetorno = 'Usuário não cadastrado, registre-se!';

      break;
    case 'auth/user-disabled':
      valorRetorno = 'Não foi possivel logar com sua conta Google';
      break;
    default:
  }

  return valorRetorno;
};
