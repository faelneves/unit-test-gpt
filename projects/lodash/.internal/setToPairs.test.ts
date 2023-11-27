import setToPairs from './setToPairs.ts';

describe('setToPairs', () => {
  it('should convert a set to its value-value pairs', () => {
    const set = new Set([1, 2, 3]);
    const result = setToPairs(set);
    expect(result).toEqual([[1, 1], [2, 2], [3, 3]]);
  });

  it('should return an empty array for an empty set', () => {
    const set = new Set();
    const result = setToPairs(set);
    expect(result).toEqual([]);
  });

  it('should return correctly handle sets with non-numeric values', () => {
    const set = new Set(['a', 'b', 'c']);
    const result = setToPairs(set);
    expect(result).toEqual([['a', 'a'], ['b', 'b'], ['c', 'c']]);
  });
});
