import each from './each';

describe('each', () => {
  it('should iterate over an array', () => {
    const array = [1, 2, 3];
    const iteratee = jest.fn();

    each(array, iteratee);

    expect(iteratee).toHaveBeenCalledWith(1, 0, array);
    expect(iteratee).toHaveBeenCalledWith(2, 1, array);
    expect(iteratee).toHaveBeenCalledWith(3, 2, array);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });

  it('should iterate over an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = jest.fn();

    each(object, iteratee);

    expect(iteratee).toHaveBeenCalledWith(1, 'a', object);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', object);
    expect(iteratee).toHaveBeenCalledWith(3, 'c', object);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });
});
