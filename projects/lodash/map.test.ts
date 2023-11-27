import map from './map';

describe('map', () => {
  it('should return an array of squared values', () => {
    const square = (n) => n * n;
    const array = [2, 4, 6];
    const expected = [4, 16, 36];

    const result = map(array, square);

    expect(result).toEqual(expected);
  });

  it('should return an array of doubled values using index', () => {
    const doubleWithIndex = (n, index) => n * 2 + index;
    const array = [1, 2, 3];
    const expected = [2, 5, 8]; // [1 * 2 + 0, 2 * 2 + 1, 3 * 2 + 2]

    const result = map(array, doubleWithIndex);

    expect(result).toEqual(expected);
  });

  it('should return an empty array when input array is null or undefined', () => {
    const iteratee = () => {};
    const nullArray = null;
    const undefinedArray = undefined;
    const expected = [];

    const nullResult = map(nullArray, iteratee);
    const undefinedResult = map(undefinedArray, iteratee);

    expect(nullResult).toEqual(expected);
    expect(undefinedResult).toEqual(expected);
  });
});
