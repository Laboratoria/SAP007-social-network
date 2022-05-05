import "../../lib/config-firebase.js";
import { lerPost } from "../../lib/config-firestore.js";


export default () => { 
    let containerFeed = document.createElement('div');

    let templateFeed = `
    <p id="post">Post</p>
    <input type="text" placeholder="Qual a sua teoria?" /><br>
    <br><button type="submit" id='buttonPost'>Postar</button><br>
    `;

    containerFeed.innerHTML = templateFeed;

    
    let listButtonPost = containerLogin.querySelector("#buttonPost");
 
    listButtonPost.addEventListener("click", (e) => {
        e.preventDefault();
        lerPost().then(() => {
        })
    });   

    return containerFeed;

}
