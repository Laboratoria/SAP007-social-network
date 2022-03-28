export function Loader() {
  const loader = document.createElement('div');
  loader.classList.add('spinnerContainer');
  const loaderSpinner = document.createElement('img');
  loaderSpinner.classList.add('spinner');
  loaderSpinner.src = '../src/app/assets/Spinner.svg';
  loader.append(loaderSpinner);

  return loader;
}
