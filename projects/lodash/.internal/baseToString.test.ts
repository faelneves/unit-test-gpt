import baseToString from './baseToString';
import isSymbol from '../isSymbol';

describe('baseToString', () => {
  it('should convert a string value to the same string', () => {
    expect(baseToString('Hello World')).toBe('Hello World');
    expect(baseToString('123')).toBe('123');
  });

  it('should convert an array value to a string representation', () => {
    expect(baseToString([1, 2, 3])).toBe('1,2,3');
    expect(baseToString(['a', 'b', 'c'])).toBe('a,b,c');
  });

  it('should convert a symbol value to a string representation', () => {
    const symbol = Symbol('test');
    expect(baseToString(symbol)).toBe(symbol.toString());
  });

  it('should convert a non-string, non-array, non-symbol value to a string', () => {
    expect(baseToString(123)).toBe('123');
    expect(baseToString(null)).toBe('null');
    expect(baseToString(undefined)).toBe('undefined');
    expect(baseToString(true)).toBe('true');
    expect(baseToString(false)).toBe('false');
    expect(baseToString({ key: 'value' })).toBe('[object Object]');
  });

  // Add more test cases for edge cases and corner cases
});
