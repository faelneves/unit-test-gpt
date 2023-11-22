import asciiToArray from './asciiToArray';

describe('asciiToArray', () => {
  it('should convert an ASCII string to an array', () => {
    const string = 'hello';
    const expected = ['h', 'e', 'l', 'l', 'o'];
    const result = asciiToArray(string);
    expect(result).toEqual(expected);
  });

  it('should convert an empty ASCII string to an empty array', () => {
    const string = '';
    const expected = [];
    const result = asciiToArray(string);
    expect(result).toEqual(expected);
  });

  it('should convert a string with special characters to an array', () => {
    const string = 'abc!@#$%^&*()123';
    const expected = ['a', 'b', 'c', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '1', '2', '3'];
    const result = asciiToArray(string);
    expect(result).toEqual(expected);
  });
});
