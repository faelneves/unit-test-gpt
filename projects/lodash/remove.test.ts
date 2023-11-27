import remove from './remove';

describe('remove', () => {
  it('should remove all even numbers from the array', () => {
    const array = [1, 2, 3, 4];
    const evens = remove(array, (n) => n % 2 === 0);

    expect(array).toEqual([1, 3]);
    expect(evens).toEqual([2, 4]);
  });

  it('should return an empty array if the input array is empty', () => {
    const array = [];
    const evens = remove(array, (n) => n % 2 === 0);

    expect(array).toEqual([]);
    expect(evens).toEqual([]);
  });

  it('should return an empty array if the input array is null or undefined', () => {
    const evens = remove(null, (n) => n % 2 === 0);
    const odds = remove(undefined, (n) => n % 2 !== 0);

    expect(evens).toEqual([]);
    expect(odds).toEqual([]);
  });

  it('should remove all elements from the array if the predicate always returns true', () => {
    const array = [1, 2, 3, 4];
    const removed = remove(array, () => true);

    expect(array).toEqual([]);
    expect(removed).toEqual([1, 2, 3, 4]);
  });

  it('should remove no elements from the array if the predicate always returns false', () => {
    const array = [1, 2, 3, 4];
    const removed = remove(array, () => false);

    expect(array).toEqual([1, 2, 3, 4]);
    expect(removed).toEqual([]);
  });
});
