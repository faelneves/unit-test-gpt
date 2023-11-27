import intersection from './intersection';

describe('intersection', () => {
  it('should return an array of intersecting values', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });

  it('should return an empty array if no intersecting values are found', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should handle multiple arrays', () => {
    expect(intersection([1, 2], [2, 3], [3, 4])).toEqual([]);
    expect(intersection([1, 2], [2, 3], [1, 4])).toEqual([1]);
    expect(intersection([1, 2, 3, 4], [2, 3], [1, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle arrays with different lengths', () => {
    expect(intersection([1, 2, 3], [2, 3])).toEqual([2, 3]);
    expect(intersection([1, 2], [2, 3, 4])).toEqual([2]);
  });

  it('should handle arrays with duplicate values', () => {
    expect(intersection([1, 2, 3, 4, 4], [2, 3], [3, 4, 5])).toEqual([2, 3, 4]);
    expect(intersection([1, 2, 3], [2, 2, 2], [3, 3, 3])).toEqual([]);
  });
});
