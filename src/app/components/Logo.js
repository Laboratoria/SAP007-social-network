export function Logo() {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  const logoName = document.createElement('h3');
  logoName.classList.add('logo-name');
  logoName.textContent = 'Speak your mind and find support';

  logoContainer.append(logo);
  logoContainer.append(logoName);

  return logoContainer;
}
