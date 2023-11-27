import sortedLastIndex from './sortedLastIndex';

describe('sortedLastIndex', () => {
  it('should return the highest index at which the value should be inserted into the sorted array', () => {
    expect(sortedLastIndex([1, 2, 3, 4, 5], 3)).toBe(3);
    expect(sortedLastIndex([1, 2, 3, 4, 5], 6)).toBe(5);
    expect(sortedLastIndex([1, 2, 2, 2, 3], 2)).toBe(4);
  });

  it('should return the index at which the value should be inserted when array has duplicates', () => {
    expect(sortedLastIndex([1, 2, 2, 2, 3], 1)).toBe(1);
    expect(sortedLastIndex([1, 2, 2, 2, 3], 3)).toBe(5);
    expect(sortedLastIndex([1, 1, 2, 2, 2, 3], 2)).toBe(5);
  });

  it('should return the index at which the value should be inserted when array has negative values', () => {
    expect(sortedLastIndex([-3, -2, 0, 1, 2], -2)).toBe(2);
    expect(sortedLastIndex([-3, -2, 0, 1, 2], -4)).toBe(0);
    expect(sortedLastIndex([-3, -2, -2, -2, 0, 1, 2], -2)).toBe(4);
  });

  it('should return the index at which the value should be inserted when array is empty', () => {
    expect(sortedLastIndex([], 1)).toBe(0);
    expect(sortedLastIndex([], 0)).toBe(0);
    expect(sortedLastIndex([], -1)).toBe(0);
  });
});
