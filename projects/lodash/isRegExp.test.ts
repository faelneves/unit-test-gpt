import isRegExp from './isRegExp';

describe('isRegExp', () => {
  it('should return true for a RegExp object', () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(new RegExp('abc'))).toBe(true);
    expect(isRegExp(RegExp('abc'))).toBe(true);
  });

  it('should return false for a string', () => {
    expect(isRegExp('/abc/')).toBe(false);
    expect(isRegExp('abc')).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isRegExp(123)).toBe(false);
    expect(isRegExp(NaN)).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isRegExp([])).toBe(false);
    expect(isRegExp([1, 2, 3])).toBe(false);
  });

  it('should return false for an object', () => {
    expect(isRegExp({})).toBe(false);
    expect(isRegExp({ key: 'value' })).toBe(false);
  });

  it('should return false for null', () => {
    expect(isRegExp(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isRegExp(undefined)).toBe(false);
  });

  it('should return false for a function', () => {
    expect(isRegExp(() => {})).toBe(false);
    expect(isRegExp(function() {})).toBe(false);
  });

  it('should return false for a boolean', () => {
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(false)).toBe(false);
  });

  it('should return false for a symbol', () => {
    expect(isRegExp(Symbol())).toBe(false);
  });

  it('should return false for a date', () => {
    expect(isRegExp(new Date())).toBe(false);
  });
});
