import uniq from './uniq';

describe('uniq', () => {
  it('should return a new array with duplicate values removed', () => {
    expect(uniq([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(uniq(['a', 'b', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should return the same array if there are no duplicate values', () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3]);
    expect(uniq(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should handle arrays with null or undefined values', () => {
    expect(uniq([null, undefined, null])).toEqual([null, undefined]);
    expect(uniq([undefined, null, undefined])).toEqual([undefined, null]);
  });
});
