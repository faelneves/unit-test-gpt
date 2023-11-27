import lowerCase from './lowerCase';

describe('lowerCase', () => {
  it('should convert string to lower case', () => {
    expect(lowerCase('Hello World')).toBe('hello world');
    expect(lowerCase('FooBar')).toBe('foo bar');
    expect(lowerCase('--Foo-Bar--')).toBe('foo bar');
    expect(lowerCase('__FOO_BAR__')).toBe('foo bar');
  });

  it('should handle empty string', () => {
    expect(lowerCase('')).toBe('');
  });

  it('should handle string with special characters', () => {
    expect(lowerCase('!@#$%^&*()')).toBe('!@#$%^&*()');
  });
});
