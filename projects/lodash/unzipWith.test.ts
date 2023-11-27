import unzipWith from './unzipWith';

describe('unzipWith', () => {
  const add = (a, b, c) => a + b + c;

  it('should return an empty array if the input array is empty', () => {
    const result = unzipWith([], add);
    expect(result).toEqual([]);
  });

  it('should return the regrouped and combined elements', () => {
    const input = [[1, 10, 100], [2, 20, 200]];
    const result = unzipWith(input, add);
    expect(result).toEqual([3, 30, 300]);
  });

  it('should correctly handle different types of the iteratee function', () => {
    const multiply = (a, b, c) => a * b * c;
    const input = [[1, 10, 100], [2, 20, 200]];
    const result = unzipWith(input, multiply);
    expect(result).toEqual([200, 4000, 20000]);
  });

  it('should handle empty groups within the input array', () => {
    const concat = (a, b, c) => String(a) + String(b) + String(c);
    const input = [[1, 10, 100], [], [2, 20, 200]];
    const result = unzipWith(input, concat);
    expect(result).toEqual(['110100', '', '220200']);
  });
});
