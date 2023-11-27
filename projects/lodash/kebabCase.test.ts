import kebabCase from './kebabCase';

describe('kebabCase', () => {
  it('should return kebab cased string for normal string with spaces', () => {
    const result = kebabCase('Foo Bar');
    expect(result).toBe('foo-bar');
  });

  it('should return kebab cased string for string with camel case', () => {
    const result = kebabCase('fooBar');
    expect(result).toBe('foo-bar');
  });

  it('should return kebab cased string for string with special characters', () => {
    const result = kebabCase('__FOO_BAR__');
    expect(result).toBe('foo-bar');
  });

  it('should return empty string for empty input', () => {
    const result = kebabCase('');
    expect(result).toBe('');
  });

  it('should return kebab cased string for string with numbers', () => {
    const result = kebabCase('Foo123Bar');
    expect(result).toBe('foo-123-bar');
  });

  it('should return kebab cased string for string with whitespace at the start and end', () => {
    const result = kebabCase('  Foo Bar  ');
    expect(result).toBe('foo-bar');
  });
});
