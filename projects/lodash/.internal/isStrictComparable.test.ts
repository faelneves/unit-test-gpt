import isStrictComparable from './isStrictComparable';

describe('isStrictComparable', () => {
  it('should return true for primitive values', () => {
    expect(isStrictComparable(5)).toBe(true);
    expect(isStrictComparable('hello')).toBe(true);
    expect(isStrictComparable(true)).toBe(true);
    expect(isStrictComparable(null)).toBe(true);
  });

  it('should return false for objects (including arrays)', () => {
    expect(isStrictComparable({})).toBe(false);
    expect(isStrictComparable([])).toBe(false);
    expect(isStrictComparable({ key: 'value' })).toBe(false);
    expect(isStrictComparable([1, 2, 3])).toBe(false);
  });

  it('should return false for NaN and Infinity', () => {
    expect(isStrictComparable(NaN)).toBe(false);
    expect(isStrictComparable(Infinity)).toBe(false);
  });

  it('should return false for functions and classes', () => {
    expect(isStrictComparable(() => {})).toBe(false);
    expect(isStrictComparable(class Test {})).toBe(false);
  });
});
