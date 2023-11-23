import asciiToArray from './asciiToArray';

describe('asciiToArray', () => {
  it('should convert an ASCII string to an array', () => {
    const string = 'Hello World!';
    const expected = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
    const result = asciiToArray(string);
    expect(result).toEqual(expected);
  });

  it('should return an empty array for an empty string', () => {
    const string = '';
    const expected = [];
    const result = asciiToArray(string);
    expect(result).toEqual(expected);
  });

  it('should convert a string with special characters to an array', () => {
    const string = 'Hello, World!';
    const expected = ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
    const result = asciiToArray(string);
    expect(result).toEqual(expected);
  });
});
