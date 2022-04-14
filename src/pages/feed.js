
import "../lib/firebase.js";
export default () =>{
  const container = document.createElement("div");
  const templatetest = `
  <input type="text"></input>

  `;

  container.innerHTML= templatetest;
  return container;

}
