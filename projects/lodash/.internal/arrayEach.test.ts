import arrayEach from './arrayEach';

describe('arrayEach', () => {
  it('should iterate over the array and invoke the iteratee function', () => {
    const array = [1, 2, 3];
    const iteratee = jest.fn();
    arrayEach(array, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(1, 0, array);
    expect(iteratee).toHaveBeenCalledWith(2, 1, array);
    expect(iteratee).toHaveBeenCalledWith(3, 2, array);
  });

  it('should break iteration if the iteratee returns false', () => {
    const array = [1, 2, 3];
    const iteratee = jest.fn().mockReturnValue(false);
    arrayEach(array, iteratee);
    expect(iteratee).toHaveBeenCalledTimes(1);
    expect(iteratee).toHaveBeenCalledWith(1, 0, array);
  });

  it('should return the original array', () => {
    const array = [1, 2, 3];
    const iteratee = jest.fn();
    const result = arrayEach(array, iteratee);
    expect(result).toBe(array);
  });
});
