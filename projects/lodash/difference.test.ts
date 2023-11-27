import difference from './difference';

describe('difference', () => {
  it('returns an empty array when provided array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  it('returns the array with non-duplicate values when provided arrays have same values', () => {
    expect(difference([1, 2, 3], [2, 3])).toEqual([1]);
  });

  it('returns the array with values that are not in the other arrays', () => {
    expect(difference([1, 2, 3], [2, 4], [3, 5])).toEqual([1]);
  });

  it('returns the array with values that are not in the other arrays', () => {
    expect(difference(['a', 'b', 'c', 'd'], ['b', 'd'], ['c', 'e'])).toEqual(['a']);
  });
});
