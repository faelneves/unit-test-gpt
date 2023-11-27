import isArrayLikeObject from './isArrayLikeObject';

describe('isArrayLikeObject', () => {
  it('should return true for array-like objects', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    expect(isArrayLikeObject({ length: 2 })).toBe(true);
    expect(isArrayLikeObject('abc')).toBe(true);
    expect(isArrayLikeObject(document.body.children)).toBe(true);
  });

  it('should return false for non-array-like objects', () => {
    expect(isArrayLikeObject(Function)).toBe(false);
    expect(isArrayLikeObject({})).toBe(false);
    expect(isArrayLikeObject(null)).toBe(false);
    expect(isArrayLikeObject(undefined)).toBe(false);
    expect(isArrayLikeObject(123)).toBe(false);
    expect(isArrayLikeObject(true)).toBe(false);
    expect(isArrayLikeObject(Symbol())).toBe(false);
  });
});
