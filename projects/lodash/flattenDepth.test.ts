import flattenDepth from './flattenDepth';

describe('flattenDepth', () => {
  it('should flatten array by default depth', () => {
    const array = [1, [2, [3, [4]], 5]];
    const result = flattenDepth(array);
    expect(result).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should flatten array to specified depth', () => {
    const array = [1, [2, [3, [4]], 5]];
    const result = flattenDepth(array, 2);
    expect(result).toEqual([1, 2, 3, [4], 5]);
  });

  it('should handle empty array', () => {
    const array = [];
    const result = flattenDepth(array);
    expect(result).toEqual([]);
  });

  it('should handle null or undefined array', () => {
    const result1 = flattenDepth(null);
    const result2 = flattenDepth(undefined);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  it('should handle empty sub-arrays', () => {
    const array = [1, [], [2, [[]]], 3];
    const result = flattenDepth(array, 2);
    expect(result).toEqual([1, 2, [], 3]);
  });

  it('should handle depth greater than actual depth of the array', () => {
    const array = [1, [2, [3]]];
    const result = flattenDepth(array, 5);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle negative depth', () => {
    const array = [1, [2, [3]]];
    const result = flattenDepth(array, -1);
    expect(result).toEqual([1, 2, [3]]);
  });

});
