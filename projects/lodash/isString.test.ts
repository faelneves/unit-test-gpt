import isString from './isString';

describe('isString', () => {
  it('should return true for string primitive', () => {
    expect(isString('abc')).toBe(true);
  });

  it('should return true for String object', () => {
    expect(isString(new String('abc'))).toBe(true);
  });

  it('should return false for non-string values', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(function() {})).toBe(false);
  });
});
