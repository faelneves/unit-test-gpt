import union from './union';

describe('union', () => {
  it('should return an array of unique values from all given arrays', () => {
    expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(union([1, 2], [2, 3], [3, 4], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    expect(union([1, 2, 2], [2, 3])).toEqual([1, 2, 3]);
    expect(union([1, 2, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(union([1, 2, 2], [2, 3], [3, 4], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(union([1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
    expect(union([1, 2], [2, 3, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(union([1, 2], [2, 3, 3], [3, 4], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays with non-numeric values', () => {
    expect(union(['a', 'b'], ['b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(union(['a', 'b'], ['b', 'c'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    expect(union(['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
