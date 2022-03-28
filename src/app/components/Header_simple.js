export function HeaderSimple() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-timeline');

  const logoHeader = document.createElement('div');
  logoHeader.classList.add('logo-timeline');

  headerContainer.append(logoHeader);

  return headerContainer;
}
