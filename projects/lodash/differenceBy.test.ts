import differenceBy from './differenceBy';

describe('differenceBy', () => {
  it('returns the new array of filtered values based on the iteratee function', () => {
    const array = [2.1, 1.2];
    const values = [2.3, 3.4];
    const iteratee = Math.floor;

    const result = differenceBy(array, values, iteratee);

    expect(result).toEqual([1.2]);
  });

  it('returns an empty array if the input array is empty', () => {
    const array = [];
    const values = [2.3, 3.4];
    const iteratee = Math.floor;

    const result = differenceBy(array, values, iteratee);

    expect(result).toEqual([]);
  });

  it('returns an empty array if all values are excluded', () => {
    const array = [2.1, 1.2];
    const values = [2.1, 1.2];
    const iteratee = Math.floor;

    const result = differenceBy(array, values, iteratee);

    expect(result).toEqual([]);
  });

  it('returns an empty array if no values to exclude are specified', () => {
    const array = [2.1, 1.2];
    const iteratee = Math.floor;

    const result = differenceBy(array, iteratee);

    expect(result).toEqual([]);
  });
});
