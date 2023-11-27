import isIndex from './isIndex';

describe('isIndex', () => {
  it('should return true for valid array-like index', () => {
    expect(isIndex(0, 5)).toBe(true);
    expect(isIndex(2, 5)).toBe(true);
    expect(isIndex(4, 5)).toBe(true);
  });

  it('should return false for invalid array-like index', () => {
    expect(isIndex(-1, 5)).toBe(false);
    expect(isIndex(5, 5)).toBe(false);
    expect(isIndex(3.14, 5)).toBe(false);
    expect(isIndex(Symbol('index'), 5)).toBe(false);
    expect(isIndex('index', 5)).toBe(false);
    expect(isIndex(null, 5)).toBe(false);
    expect(isIndex(undefined, 5)).toBe(false);
    expect(isIndex({}, 5)).toBe(false);
    expect(isIndex([], 5)).toBe(false);
  });

  it('should use MAX_SAFE_INTEGER as upper bounds by default', () => {
    expect(isIndex(0)).toBe(true);
    expect(isIndex(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isIndex(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  });

  it('should treat negative numbers as invalid index', () => {
    expect(isIndex(-1)).toBe(false);
    expect(isIndex(-10)).toBe(false);
    expect(isIndex(-Infinity)).toBe(false);
  });

  it('should treat non-integer numbers as invalid index', () => {
    expect(isIndex(3.14)).toBe(false);
    expect(isIndex(Math.PI)).toBe(false);
    expect(isIndex(Infinity)).toBe(false);
    expect(isIndex(NaN)).toBe(false);
  });
});
