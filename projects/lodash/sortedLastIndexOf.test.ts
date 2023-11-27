import sortedLastIndexOf from './sortedLastIndexOf';

describe('sortedLastIndexOf', () => {
  it('should return the index of the last occurrence of the value in a sorted array', () => {
    expect(sortedLastIndexOf([1, 2, 3, 4, 5, 5, 5, 6], 5)).toBe(6);
    expect(sortedLastIndexOf([10, 20, 30, 40, 50], 50)).toBe(4);
    expect(sortedLastIndexOf([-1, 0, 0, 0, 1], 0)).toBe(3);
  });

  it('should return -1 if the value is not found in the sorted array', () => {
    expect(sortedLastIndexOf([1, 2, 3, 4], 5)).toBe(-1);
    expect(sortedLastIndexOf([], 5)).toBe(-1);
  });

  it('should handle arrays with duplicate values', () => {
    expect(sortedLastIndexOf([1, 1, 1, 1, 1], 1)).toBe(4);
    expect(sortedLastIndexOf([1, 2, 2, 2, 3], 2)).toBe(3);
  });

  it('should handle array with negative values', () => {
    expect(sortedLastIndexOf([-5, -4, -3, -2, -1], -3)).toBe(2);
    expect(sortedLastIndexOf([-100, -50, -20, -10, -5], -100)).toBe(0);
  });

  it('should handle array with mixed positive and negative values', () => {
    expect(sortedLastIndexOf([-3, -2, -1, 0, 1, 2, 3], -2)).toBe(1);
    expect(sortedLastIndexOf([-10, -5, 0, 5, 10], 0)).toBe(2);
  });

  it('should handle array with non-numeric values', () => {
    expect(sortedLastIndexOf(['a', 'b', 'c', 'd', 'e'], 'c')).toBe(2);
    expect(sortedLastIndexOf(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'banana')).toBe(1);
  });
});
