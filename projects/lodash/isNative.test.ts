import isNative from './isNative';

describe('isNative', () => {
  it('should return true for native functions', () => {
    expect(isNative(Array.prototype.push)).toBe(true);
    expect(isNative(Object.prototype.hasOwnProperty)).toBe(true);
    expect(isNative(Array.isArray)).toBe(true);
    expect(isNative(Math.max)).toBe(true);
  });

  it('should return false for non-native functions', () => {
    function customFunction() {}
    expect(isNative(customFunction)).toBe(false);
    expect(isNative((value) => value)).toBe(false);
    expect(isNative(() => {})).toBe(false);
    expect(isNative(function () {})).toBe(false);
  });

  it('should return false for non-function values', () => {
    expect(isNative(undefined)).toBe(false);
    expect(isNative(null)).toBe(false);
    expect(isNative(123)).toBe(false);
    expect(isNative('string')).toBe(false);
    expect(isNative({})).toBe(false);
    expect(isNative([])).toBe(false);
    expect(isNative(true)).toBe(false);
  });
});
