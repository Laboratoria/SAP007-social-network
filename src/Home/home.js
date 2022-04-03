import '../firebase/FireBaseConfig.js';
import { signinWithGoogle , signinPassword } from '../firebase/authentication.js'

export default() => {
  const containerHome = document.createElement('div')

  const templateHome = `
  
     
  `; containerHome.innerHTML = template;
    const textAbout = containerHome.getElementById('text-about');
    textAbout.addEventListener('click',(e) => {
        e.preventDefault();
       const home = document.querySelector('.return-home');
    })

return container;
}