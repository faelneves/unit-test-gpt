import sortedUniqBy from './sortedUniqBy';

describe('sortedUniqBy', () => {
  it('should return an empty array when the input array is empty', () => {
    expect(sortedUniqBy([], Math.floor)).toEqual([]);
  });

  it('should return an array with unique elements based on the iteratee function', () => {
    expect(sortedUniqBy([1.1, 1.2, 2.2, 2.3, 2.4, 3.3], Math.floor)).toEqual([1.1, 2.2, 3.3]);
    expect(sortedUniqBy([1.1, 1.2, 2.2, 2.3, 2.4, 3.3], Math.ceil)).toEqual([1.1, 2.2, 3.3]);
  });

  it('should return the same array if there are no duplicate elements', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (n) => n * 2;
    expect(sortedUniqBy(array, iteratee)).toEqual(array);
  });

  it('should return an array with unique elements of different types based on the iteratee function', () => {
    const array = [1, '1', 2, '2', 3, '3'];
    const iteratee = (n) => typeof n === 'number' ? n : parseInt(n);
    expect(sortedUniqBy(array, iteratee)).toEqual([1, '1', 2, '2', 3, '3']);
  });

  it('should return an array with unique elements when the iteratee function returns NaN', () => {
    const array = [NaN, 1, NaN, 2, NaN, 3];
    const iteratee = (n) => Math.sqrt(n);
    expect(sortedUniqBy(array, iteratee)).toEqual([NaN, 1]);
  });

  it('should return an array with unique elements when the iteratee function returns Infinity', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (n) => 1 / n;
    expect(sortedUniqBy(array, iteratee)).toEqual([1]);
  });

  it('should return an array with unique elements when the iteratee function returns -Infinity', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (n) => -1 / n;
    expect(sortedUniqBy(array, iteratee)).toEqual([1]);
  });

  it('should return an array with unique elements when the iteratee function returns 0', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (n) => n - n;
    expect(sortedUniqBy(array, iteratee)).toEqual([1]);
  });
});
