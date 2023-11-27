import upperCase from './upperCase';

describe('upperCase', () => {
  it('should convert string with hyphens to upper case', () => {
    const input = '--foo-bar';
    const expectedOutput = 'FOO BAR';

    expect(upperCase(input)).toBe(expectedOutput);
  });

  it('should convert string with camel case to upper case', () => {
    const input = 'fooBar';
    const expectedOutput = 'FOO BAR';

    expect(upperCase(input)).toBe(expectedOutput);
  });

  it('should convert string with underscores to upper case', () => {
    const input = '__foo_bar__';
    const expectedOutput = 'FOO BAR';

    expect(upperCase(input)).toBe(expectedOutput);
  });

  it('should convert empty string to empty string', () => {
    const input = '';
    const expectedOutput = '';

    expect(upperCase(input)).toBe(expectedOutput);
  });

  it('should convert string with apostrophes to upper case', () => {
    const input = "it's a string";
    const expectedOutput = "IT'S A STRING";

    expect(upperCase(input)).toBe(expectedOutput);
  });

  it('should convert non-string input to upper case', () => {
    const input = 123;
    const expectedOutput = '123';

    expect(upperCase(input)).toBe(expectedOutput);
  });
});
