import reduce from './reduce';

describe('reduce', () => {
  it('should reduce an array of numbers', () => {
    const collection = [1, 2, 3, 4];
    const iteratee = (acc, num) => acc + num;
    const result = reduce(collection, iteratee);

    expect(result).toBe(10);
  });

  it('should reduce an object with key-value pairs', () => {
    const collection = { 'a': 1, 'b': 2, 'c': 3 };
    const iteratee = (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    };
    const result = reduce(collection, iteratee, {});

    expect(result).toEqual({ '1': ['a'], '2': ['b'], '3': ['c'] });
  });
});
