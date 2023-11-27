import isNumber from './isNumber';

describe('isNumber', () => {
  it('should return true if the value is a number', () => {
    expect(isNumber(3)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
  });

  it('should return false if the value is not a number', () => {
    expect(isNumber('3')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(true)).toBe(false);
  });
});
