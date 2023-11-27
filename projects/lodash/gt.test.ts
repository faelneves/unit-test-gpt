import gt from './gt';

describe('gt', () => {
  it('should return true if value is greater than other', () => {
    expect(gt(3, 1)).toBe(true);
    expect(gt(5, -2)).toBe(true);
    expect(gt('10', '5')).toBe(true);
    expect(gt('abc', 'aaa')).toBe(true);
  });

  it('should return false if value is less than or equal to other', () => {
    expect(gt(3, 3)).toBe(false);
    expect(gt(2, 6)).toBe(false);
    expect(gt('10', '10')).toBe(false);
    expect(gt('abc', 'def')).toBe(false);
  });

  it('should handle string values', () => {
    expect(gt('10', '2')).toBe(true);
    expect(gt('2', '10')).toBe(false);
    expect(gt('abc', 'aaa')).toBe(true);
    expect(gt('aaa', 'abc')).toBe(false);
  });

  it('should handle numeric values in string format', () => {
    expect(gt('10', '5')).toBe(true);
    expect(gt('5', '10')).toBe(false);
    expect(gt('-5', '5')).toBe(false);
  });

  it('should handle negative values', () => {
    expect(gt(-5, -10)).toBe(true);
    expect(gt(-10, -5)).toBe(false);
  });

  it('should handle non-numeric values', () => {
    expect(gt(null, 5)).toBe(false);
    expect(gt(undefined, 5)).toBe(false);
    expect(gt('', 5)).toBe(false);
    expect(gt('abc', 5)).toBe(false);
    expect(gt([], 5)).toBe(false);
    expect(gt({}, 5)).toBe(false);
  });
});
