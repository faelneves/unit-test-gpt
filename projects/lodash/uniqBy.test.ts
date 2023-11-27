import uniqBy from './uniqBy';

describe('uniqBy', () => {
  it('should return a new duplicate free array', () => {
    const array = [2.1, 1.2, 2.3];
    const iteratee = Math.floor;

    const result = uniqBy(array, iteratee);

    const expectedResult = [2.1, 1.2];
    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array if the input array is empty', () => {
    const array = [];
    const iteratee = Math.floor;

    const result = uniqBy(array, iteratee);

    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array if the input array is null', () => {
    const array = null;
    const iteratee = Math.floor;

    const result = uniqBy(array, iteratee);

    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array if the input array is undefined', () => {
    const array = undefined;
    const iteratee = Math.floor;

    const result = uniqBy(array, iteratee);

    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });
});
