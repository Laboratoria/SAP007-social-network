
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider

} from '../src/lib/authentication.js';

import { login } from "../src/pages/login.js"

jest.mock("../src/lib/export.js")
jest.mock("../src/lib/authentication.js")

describe('Its a function', () => {
  it("signInWithEmailAndPassword", () => {
    expect(typeof signInWithEmailAndPassword).toBe("fuction");
    it("GoogleAuthProvider", () => {
      expect(typeof GoogleAuthProvider).tobe("fuction");
    })
  })
})


describe('login', () => {
  it('its a function', () => {
    login.mockResolvedValueOnce();
    const page = login()
    const user = page.queryselector(".email")
    const password = page.queryselector(".password")
    const loginBtn = page.queryselector(".enter")

    user.value = "teste@leiturama.com"
    password.value = "1234567"
    loginBtn.dispatchEvent(new Event("click"));
    expect(signInWithEmailAndPassword).oHaveBeenCalledWith(user,password);

  });
});

const error = {code:'udh/internal-error'};

