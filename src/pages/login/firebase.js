export const sendLogin = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("#email-register").value;
    const password = form.querySelector("#password-register").value;
    newUserWithEmailAndPassword(email, password);
    console.log("email e senha");
  });
  form.button.addEventListener("click", () => {
    nerwUserWithGoogle(auth, provider);
  });
  return;
};
