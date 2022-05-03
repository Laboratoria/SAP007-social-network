let minRows = 1;
let maxRows = 2;

export function rezizeTextarea(text) {
  if (text.scrollTop == 0) text.scrollTop = 1;
  while (text.scrollTop == 0) {
    if (text.rows > minRows) text.rows--;
    else break;
    text.scrollTop = 1;
    if (text.rows < maxRows) text.style.overflowY = 'hidden';
    if (text.scrollTop > 0) {
      text.rows++;
      break;
    }
  }
  while (text.scrollTop > 0) {
    if (text.rows < maxRows) {
      text.rows++;
      if (text.scrollTop == 0) text.scrollTop = 1;
    } else {
      text.style.overflowY = 'auto';
      break;
    }
  }
}
