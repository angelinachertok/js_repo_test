/**
 * Преобразует строку в заглавный регистр первой буквы.
 * @param {string} str - Входная строка.
 * @returns {string} Строка с заглавной первой буквой.
 */
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Переворачивает строку.
 * @param {string} str - Входная строка.
 * @returns {string} Перевёрнутая строка.
 */
function reverse(str) {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

module.exports = { capitalize, reverse };
