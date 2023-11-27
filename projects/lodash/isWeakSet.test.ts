import isWeakSet from './isWeakSet';

describe('isWeakSet', () => {
  it('should return true for a WeakSet object', () => {
    const weakSet = new WeakSet();
    expect(isWeakSet(weakSet)).toBe(true);
  });

  it('should return false for a Set object', () => {
    const set = new Set();
    expect(isWeakSet(set)).toBe(false);
  });

  it('should return false for other types of values', () => {
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet(true)).toBe(false);
    expect(isWeakSet(123)).toBe(false);
    expect(isWeakSet('abc')).toBe(false);
    expect(isWeakSet([1, 2, 3])).toBe(false);
    expect(isWeakSet({ key: 'value' })).toBe(false);
    expect(isWeakSet(() => {})).toBe(false);
    expect(isWeakSet(Symbol())).toBe(false);
  });
});
