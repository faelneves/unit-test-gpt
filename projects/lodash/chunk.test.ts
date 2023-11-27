import chunk from './chunk';

describe('chunk', () => {
  it('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should return an empty array if the chunk size is less than 1', () => {
    expect(chunk(['a', 'b', 'c', 'd'], -1)).toEqual([]);
    expect(chunk(['a', 'b', 'c', 'd'], 0)).toEqual([]);
  });

  it('should split array into chunks of size 1 if no chunk size is provided', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
  });

  it('should handle array-like objects', () => {
    const arrayLike = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 };
    expect(chunk(arrayLike, 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it('should handle strings', () => {
    expect(chunk('abcdefg', 3)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]);
  });
});
