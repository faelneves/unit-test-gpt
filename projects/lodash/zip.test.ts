import zip from './zip';

describe('zip', () => {
  it('should return an array of arrays with elements zipped from the given arrays', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  it('should return an empty array if no arrays are given', () => {
    const result = zip();
    expect(result).toEqual([]);
  });

  it('should return an empty array if any of the given arrays is empty', () => {
    const result = zip(['a', 'b'], [], [1, 2]);
    expect(result).toEqual([]);
  });

  it('should handle arrays of different lengths by truncating the result to the length of the shortest array', () => {
    const result = zip(['a', 'b', 'c'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  it('should handle arrays with null or undefined values', () => {
    const result = zip(['a', null, 'c'], [1, undefined, 3], [true, false, null]);
    expect(result).toEqual([['a', 1, true], [null, undefined, false]]);
  });
});
