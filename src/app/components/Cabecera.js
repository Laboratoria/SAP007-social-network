export const Header = () => {
  // Esta es una cabecera de prueba
  const header = document.createElement('div');
  header.style.background = 'orange';
  header.style.height = '80px';
  header.style.display = 'flex';
  header.style.justifyContent = 'center';
  header.style.alignItems = 'center';

  const logo = document.createElement('p');
  logo.textContent = 'Yami';

  header.append(logo);

  return header;
};
