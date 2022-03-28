export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;

  if (!email) {
    return false;
  }

  // return expression.test(email.trim());

  return typeof email === 'string'
    ? expression.test(email.trim())
    : expression.test(`${email}`);
}

export function validatePassword(password) {
  // La contraseña debe tener entre 8 a 14 caracteres

  const expression = /^.{6,14}$/;

  if (!password) {
    return false;
  }

  return typeof password === 'string'
    ? expression.test(password.trim())
    : expression.test(`${password}`);
}

export function validateField(field) {
  if (typeof field !== 'string') {
    return false;
  }
  if (field.trim().length <= 0) {
    return false;
  }

  return true;
}

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  // Intervalo de años
  let interval = seconds / 31536000;
  if (interval > 1) {
    const years = Math.floor(interval);
    if (years === 1) return `Hace ${years} mes`;
    return `Hace ${years} años`;
  }

  // Intervalo de meses
  interval = seconds / 2592000;
  if (interval > 1) {
    const months = Math.floor(interval);
    if (months === 1) return `Hace ${months} mes`;
    return `Hace ${months} meses`;
  }

  // Intervalo de días
  interval = seconds / 86400;
  if (interval > 1) {
    const days = Math.floor(interval);
    if (days === 1) return `Hace ${days} hora`;
    return `Hace ${days} días`;
  }

  // Intervalo de horas
  interval = seconds / 3600;
  if (interval > 1) {
    const hours = Math.floor(interval);
    if (hours === 1) return `Hace ${hours} hora`;
    return `Hace ${hours} horas`;
  }

  // Intervalo de minutos
  interval = seconds / 60;
  if (interval > 1) {
    const minutes = Math.floor(interval);
    if (minutes === 1) return `Hace ${minutes} minuto`;
    return `Hace ${minutes} minutos`;
  }
  return 'Hace segundos';
};
