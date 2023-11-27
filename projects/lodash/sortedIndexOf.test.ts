import sortedIndexOf from './sortedIndexOf';

describe('sortedIndexOf', () => {
  it('should return the index of the matched value', () => {
    expect(sortedIndexOf([4, 5, 5, 5, 6], 5)).toBe(1);
  });

  it('should return -1 if value is not found', () => {
    expect(sortedIndexOf([4, 6, 7, 8, 9], 5)).toBe(-1);
  });

  it('should return -1 if array is empty', () => {
    expect(sortedIndexOf([], 5)).toBe(-1);
  });

  it('should return -1 if array is null', () => {
    expect(sortedIndexOf(null, 5)).toBe(-1);
  });

  it('should handle non-integer value', () => {
    expect(sortedIndexOf([1.1, 2.2, 3.3, 4.4], 2.2)).toBe(1);
  });

  it('should handle negative numbers', () => {
    expect(sortedIndexOf([-5, -3, -2, -1, 0], -3)).toBe(1);
  });
});
