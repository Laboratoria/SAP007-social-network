export const errorHandlingGeral = (error) => {
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
    // case auth/popup-closed-by-user, quando o pop-up fecha antes de concluir o login.
    case 'auth/user-disabled':
      valorRetorno = 'Não foi possivel logar com sua conta Google';
      break;
    default:
  }

  return valorRetorno;
};
