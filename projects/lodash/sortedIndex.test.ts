import sortedIndex from './sortedIndex';

describe('sortedIndex', () => {
  it('should return the correct index for values in a sorted array', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 25)).toBe(2);
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
    expect(sortedIndex([10, 20, 30, 40, 50], 55)).toBe(5);
  });

  it('should return the correct index when array contains duplicate values', () => {
    expect(sortedIndex([10, 20, 30, 30, 40], 25)).toBe(2);
    expect(sortedIndex([10, 20, 30, 30, 40], 35)).toBe(4);
    expect(sortedIndex([10, 20, 30, 30, 40], 55)).toBe(5);
  });

  it('should return the correct index when array is empty', () => {
    expect(sortedIndex([], 10)).toBe(0);
  });
});
