/*
* @jest-environment jsdom
*/
import {
  userLogin,
  userGoogle

} from '../../src/lib/authentication.js';

import  login from "../../src/pages/login.js"

jest.mock("../../src/lib/export.js")
jest.mock("../../src/lib/authentication.js")




describe('pagina de login', () => {
  it('deverá logar usuário com sucesso', () => {
    userLogin.mockResolvedValueOnce()

     const page = login()
    const user = page.querySelector(".email")
    const password = page.querySelector(".password")
    const loginBtn = page.querySelector(".enter")

    user.value = "teste@lab.com"
    password.value = "1234567"
    page.submit()
    expect(userLogin).toHaveBeenCalledWith("teste@lab.com","1234567"); 

  });
});

const error = {code:'udh/internal-error'};

