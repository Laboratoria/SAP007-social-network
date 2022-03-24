export default function signIn (){
        const container = document.createElement('div');
        const template = `
            <div>
                <p> Sign In </p>
                <input type="email" id="email">
                <input type="password" id="password">
                <button type="submit" id="btnSignIn">Login</button>
            </div>
        `;
         container.innerHTML = template;
         return container
         // console.log(template);
    }
    
    // const btnSignIn = document.getElementById('btnSignIn');
    
    // btnSignIn.addEventListener("click", async (e) => {
    //     e.preventDefault();
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;
    //     const tryingSignIn = await signIn (email,password);
    //     console.log(tryingSignIn);
    // })
    