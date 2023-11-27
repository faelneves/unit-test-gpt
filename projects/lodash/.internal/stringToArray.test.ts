import stringToArray from './stringToArray';

describe('stringToArray', () => {
  it('should convert string to an array with ASCII characters', () => {
    const result = stringToArray('hello');
    expect(result).toEqual(['h', 'e', 'l', 'l', 'o']);
  });

  it('should convert string to an array with Unicode characters', () => {
    const result = stringToArray('😀🌍');
    expect(result).toEqual(['😀', '🌍']);
  });

  it('should convert an empty string to an empty array', () => {
    const result = stringToArray('');
    expect(result).toEqual([]);
  });
});
