export function toggleMenu(element) {
  return element.classList.toggle('active');
}

export async function generalErrors(paragraphWarning, warningsSection) {
  warningsSection.classList.toggle('active');
  paragraphWarning.classList.toggle('active');

  return setTimeout(() => {
    warningsSection.classList.toggle('active');
    paragraphWarning.classList.toggle('active');
  }, 4000);
}
