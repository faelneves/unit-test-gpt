import takeRight from './takeRight';

describe('takeRight', () => {
  it('should return a slice of array with n elements taken from the end', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(takeRight([])).toEqual([]);
    expect(takeRight([], 2)).toEqual([]);
    expect(takeRight([], 5)).toEqual([]);
    expect(takeRight([], 0)).toEqual([]);
  });

  it('should return an empty array if n is greater than or equal to the length of the array', () => {
    expect(takeRight([1, 2, 3], 3)).toEqual([]);
    expect(takeRight([1, 2, 3], 4)).toEqual([]);
    expect(takeRight([1, 2, 3], 100)).toEqual([]);
  });

  it('should return the original array if n is 0', () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(takeRight(['a', 'b', 'c'], 0)).toEqual(['a', 'b', 'c']);
    expect(takeRight(['a'], 0)).toEqual(['a']);
  });

  it('should return the original array if n is negative', () => {
    expect(takeRight([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(takeRight(['a', 'b', 'c'], -2)).toEqual(['a', 'b', 'c']);
    expect(takeRight(['a'], -3)).toEqual(['a']);
  });

  it('should return the entire array if n is greater than the length of the array', () => {
    expect(takeRight([1, 2, 3], 4)).toEqual([1, 2, 3]);
    expect(takeRight(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
    expect(takeRight(['a'], 10)).toEqual(['a']);
  });
});
