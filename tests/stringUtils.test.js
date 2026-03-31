const { capitalize, reverse } = require('../src/stringUtils');

describe('stringUtils', () => {
  test('capitalize делает первую букву заглавной', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('capitalize возвращает пустую строку без изменений', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalize обрабатывает нестроковые значения', () => {
    expect(capitalize(null)).toBe(null);
    expect(capitalize(123)).toBe(123);
  });

  test('reverse переворачивает строку', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('12345')).toBe('54321');
  });

  test('reverse возвращает пустую строку для нестроковых значений', () => {
    expect(reverse(null)).toBe('');
    expect(reverse(123)).toBe('');
  });
});
