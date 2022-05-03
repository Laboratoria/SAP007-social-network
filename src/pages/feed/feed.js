import "../../lib/config-firebase.js";
import { lerPost } from "../../lib/config-firestore.js";


export default () => { 
    const containerFeed = document.createElement('div');

    const templateFeed = `
    <p id="post"></p>
    <input type="text" placeholder="Qual a sua teoria?" /><br>
    <br><button type="submit" id='buttonPost'>Postar</button><br>
    `;

    containerFeed.innerHTML = templateFeed;

    
    const listButtonPost = containerLogin.querySelector("#buttonPost");
 
    listButtonPost.addEventListener("click", (e) => {
        e.preventDefault();
        lerPost().then(() => {
        })
    });   

    return containerFeed;

}
