export default (item) => {
  const div = document.createElement("div");
div.setAttribute ("class", "publicated")
  const mold = `
    <h3>${item.title.toUpperCase()}</h3>
    <p>${item.text}</p>
 `;
 div.innerHTML = mold;
 return div;
};
