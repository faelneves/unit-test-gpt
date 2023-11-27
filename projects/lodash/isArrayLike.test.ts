import isArrayLike from './isArrayLike';

describe('isArrayLike', () => {
  it('should return true for array', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  it('should return true for string', () => {
    expect(isArrayLike('abc')).toBe(true);
    expect(isArrayLike('')).toBe(true);
  });

  it('should return true for array-like objects', () => {
    expect(isArrayLike({ length: 0 })).toBe(true);
    expect(isArrayLike({ length: 3 })).toBe(true);
  });

  it('should return false for function', () => {
    expect(isArrayLike(Function)).toBe(false);
    expect(isArrayLike(() => {})).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
  });
});
