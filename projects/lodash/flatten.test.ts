import flatten from './flatten';

describe('flatten', () => {
  it('should return empty array when array is empty', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should return flattened array when given a nested array with one level', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should return flattened array when given a nested array with multiple levels', () => {
    expect(flatten([1, [2, [3, [4, [5]]], 6], 7])).toEqual([1, 2, [3, [4, [5]]], 6, 7]);
  });

  it('should return the same array when given a flat array', () => {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should return the same array when given an array with non-array elements', () => {
    expect(flatten([1, '2', true, null, undefined])).toEqual([1, '2', true, null, undefined]);
  });
});
