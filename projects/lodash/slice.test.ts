import slice from './slice';

describe('slice', () => {
  it('should return a slice of the array from start to end', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 2);
    expect(result).toEqual([3, 4]);
  });

  it('should return an empty array if the input array is null or empty', () => {
    expect(slice(null)).toEqual([]);
    expect(slice([])).toEqual([]);
  });

  it('should use 0 as the default start if not provided', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle negative values for start', () => {
    const array = [1, 2, 3, 4];
    const result1 = slice(array, -2);
    const result2 = slice(array, -4);
    expect(result1).toEqual([3, 4]);
    expect(result2).toEqual([1, 2, 3, 4]);
  });

  it('should handle negative values for end', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 0, -2);
    expect(result).toEqual([1, 2]);
  });

  it('should handle start greater than end', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 2, 1);
    expect(result).toEqual([]);
  });
});

