import getTag from './getTag';

describe('getTag', () => {
  it('should return "[object Undefined]" for undefined value', () => {
    expect(getTag(undefined)).toBe('[object Undefined]');
  });

  it('should return "[object Null]" for null value', () => {
    expect(getTag(null)).toBe('[object Null]');
  });

  it('should return "[object Object]" for object value', () => {
    expect(getTag({})).toBe('[object Object]');
  });

  it('should return "[object Number]" for number value', () => {
    expect(getTag(123)).toBe('[object Number]');
  });

  it('should return "[object String]" for string value', () => {
    expect(getTag('hello')).toBe('[object String]');
  });

  it('should return "[object Boolean]" for boolean value', () => {
    expect(getTag(true)).toBe('[object Boolean]');
  });

  it('should return "[object Array]" for array value', () => {
    expect(getTag([])).toBe('[object Array]');
  });
});
