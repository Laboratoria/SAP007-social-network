export function Eslogan(eslogan) {
  const esloganElement = document.createElement('div');
  esloganElement.classList.add('eslogan-container');
  const esloganText = document.createElement('h2');
  esloganText.classList.add('eslogan-text');
  esloganText.textContent = eslogan;

  esloganElement.append(esloganText);

  return esloganElement;
}
