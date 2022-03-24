export default function feed (){
    const container = document.createElement('div');
    const template = `
        <div>
            <p> feed</p>
        </div>
    `;
     container.innerHTML = template;
     return container
     // console.log(template);
}