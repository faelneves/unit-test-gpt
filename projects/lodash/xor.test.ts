import xor from './xor';

describe('xor', () => {
  it('returns an array of unique values that is the symmetric difference of the given arrays', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  });

  it('returns an empty array if no arrays are provided', () => {
    expect(xor()).toEqual([]);
  });

  it('supports arrays with non-integer keys', () => {
    const arr1 = [1, 2];
    arr1['key'] = 'value';

    const arr2 = [2, 3];
    arr2['key'] = 'value';

    expect(xor(arr1, arr2)).toEqual([1, 3]);
  });

  it('ignores non-array arguments', () => {
    expect(xor([2, 1], 'hello', 42, null, undefined)).toEqual([2, 1]);
  });

  it('excludes duplicate values', () => {
    expect(xor([2, 1, 2], [2, 3, 3])).toEqual([1, 3]);
  });

  it('returns an empty array if all arrays have the same values', () => {
    expect(xor([1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([]);
  });
});
