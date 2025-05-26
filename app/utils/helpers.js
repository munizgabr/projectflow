/**
 * Utilitários para a aplicação
 */

// Formata data para exibição
function formatDate(date) {
  if (!date) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}

// Valida email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Gera string aleatória
function randomString(length = 10) {
  return Math.random().toString(36).substring(2, length + 2);
}

// Capitaliza a primeira letra
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  formatDate,
  isValidEmail,
  randomString,
  capitalize
};
