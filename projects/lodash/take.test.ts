import take from './take';

describe('take', () => {
  it('should return an empty array if the input array is empty', () => {
    const result = take([], 3);
    expect(result).toEqual([]);
  });

  it('should return the first n elements when n is less than the length of the array', () => {
    const input = [1, 2, 3, 4, 5];
    const result = take(input, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return the entire array when n is equal to the length of the array', () => {
    const input = [1, 2, 3, 4, 5];
    const result = take(input, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the entire array when n is greater than the length of the array', () => {
    const input = [1, 2, 3];
    const result = take(input, 5);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array when n is 0', () => {
    const input = [1, 2, 3, 4, 5];
    const result = take(input, 0);
    expect(result).toEqual([]);
  });

  it('should return an empty array when n is negative', () => {
    const input = [1, 2, 3, 4, 5];
    const result = take(input, -2);
    expect(result).toEqual([]);
  });

  it('should return a new array and not modify the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const result = take(input, 3);
    expect(result).toEqual([1, 2, 3]);
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});
