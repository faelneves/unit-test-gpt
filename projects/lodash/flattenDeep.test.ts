import flattenDeep from './flattenDeep';

describe('flattenDeep', () => {
  it('should return an empty array if the input is null', () => {
    expect(flattenDeep(null)).toEqual([]);
  });

  it('should return an empty array if the input is an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  it('should return the flattened array', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays with multiple levels of nesting', () => {
    expect(flattenDeep([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arrays that contain non-array elements', () => {
    expect(flattenDeep([1, [2, 3], 4, [5, 6, [7]], 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
