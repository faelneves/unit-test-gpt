import lowerFirst from './lowerFirst';

describe('lowerFirst', () => {
  it('should convert the first character of a string to lower case', () => {
    expect(lowerFirst('Fred')).toBe('fred');
    expect(lowerFirst('FRED')).toBe('fRED');
  });

  it('should return an empty string if input is empty', () => {
    expect(lowerFirst('')).toBe('');
  });

  it('should return the same string if first character is already lower case', () => {
    expect(lowerFirst('john')).toBe('john');
  });

  it('should handle special characters and symbols as the first character', () => {
    expect(lowerFirst('_Hello')).toBe('_hello');
    expect(lowerFirst('$Money')).toBe('$money');
    expect(lowerFirst('5Star')).toBe('5star');
  });

  it('should handle numbers as the first character', () => {
    expect(lowerFirst('123ABC')).toBe('123ABC');
  });

  it('should handle non-alphabetic characters as the first character', () => {
    expect(lowerFirst('!Hello')).toBe('!hello');
  });
});
