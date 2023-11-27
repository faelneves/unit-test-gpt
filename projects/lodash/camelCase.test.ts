import camelCase from './camelCase';

describe('camelCase', () => {
  it('should convert string with normal spaces to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  it('should convert string with dashed spaces to camel case', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  it('should convert string with underscore spaces to camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  it('should convert empty string to empty string', () => {
    expect(camelCase('')).toBe('');
  });

  it('should convert string with only one word to lowercase', () => {
    expect(camelCase('hello')).toBe('hello');
  });

  it('should convert non-string values to camel case', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('123');
    expect(camelCase(true)).toBe('true');
  });

  it('should remove apostrophes and smart quotes', () => {
    expect(camelCase("I'm so smart")).toBe('imSoSmart');
    expect(camelCase("It’s a beautiful day")).toBe('itsABeautifulDay');
  });
});
