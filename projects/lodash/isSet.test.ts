import isSet from './isSet';

describe('isSet', () => {
  it('should return true if value is a Set object', () => {
    const set = new Set();
    expect(isSet(set)).toBe(true);
  });

  it('should return false if value is not a Set object', () => {
    expect(isSet(123)).toBe(false);
    expect(isSet('abc')).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(Symbol())).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet(false)).toBe(false);
    expect(isSet(new Map())).toBe(false);
    expect(isSet(new WeakSet())).toBe(false);
  });
});
