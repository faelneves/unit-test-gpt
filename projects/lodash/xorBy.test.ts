import xorBy from './xorBy';

describe('xorBy', () => {
  it('should return an array of filtered values', () => {
    const result = xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    expect(result).toEqual([1.2, 3.4]);
  });

  it('should handle empty arrays', () => {
    const result = xorBy([], [], Math.floor);
    expect(result).toEqual([]);
  });

  it('should handle arrays with one element', () => {
    const result = xorBy([2.1], [2.3], Math.floor);
    expect(result).toEqual([2.1]);
  });

  it('should handle arrays with duplicate values', () => {
    const result = xorBy([2.1, 1.2, 2.1], [2.3, 3.4, 2.3], Math.floor);
    expect(result).toEqual([1.2, 3.4]);
  });

  it('should handle arrays with different types of elements', () => {
    const result = xorBy([2.1, 'a'], ['b', 3.4], Math.floor);
    expect(result).toEqual([2.1, 'a', 'b', 3.4]);
  });
});
