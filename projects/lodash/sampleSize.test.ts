import sampleSize from './sampleSize';

describe('sampleSize', () => {
  it('should return an empty array when the input array is empty', () => {
    expect(sampleSize([], 2)).toEqual([]);
  });

  it('should return an empty array when n is less than 1', () => {
    expect(sampleSize([1, 2, 3], -1)).toEqual([]);
  });

  it('should return the whole input array when n is greater than or equal to the length of the input array', () => {
    expect(sampleSize([1, 2, 3], 3)).toEqual([1, 2, 3]);
    expect(sampleSize([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });

  it('should return n random elements from the input array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = sampleSize(array, 3);

    expect(result).toHaveLength(3);
    result.forEach((element) => {
      expect(array).toContain(element);
    });
  });
});
