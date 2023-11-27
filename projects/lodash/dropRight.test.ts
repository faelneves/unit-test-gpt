import dropRight from './dropRight';

describe('dropRight', () => {
  it('should drop the last element by default', () => {
    const array = [1, 2, 3];
    const result = dropRight(array);
    expect(result).toEqual([1, 2]);
  });

  it('should drop the specified number of elements from the end', () => {
    const array = [1, 2, 3];
    const result = dropRight(array, 2);
    expect(result).toEqual([1]);
  });

  it('should return an empty array if number of elements to drop is greater than array length', () => {
    const array = [1, 2, 3];
    const result = dropRight(array, 5);
    expect(result).toEqual([]);
  });

  it('should return the original array if number of elements to drop is 0', () => {
    const array = [1, 2, 3];
    const result = dropRight(array, 0);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array if input array is null or undefined', () => {
    const result1 = dropRight(null);
    expect(result1).toEqual([]);

    const result2 = dropRight(undefined);
    expect(result2).toEqual([]);
  });
});
