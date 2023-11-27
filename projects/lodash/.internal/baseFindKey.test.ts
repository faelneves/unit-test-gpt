import baseFindKey from './baseFindKey';

describe('baseFindKey', () => {
  it('should return the found element key', () => {
    const collection = { a: 1, b: 2, c: 3 };
    const predicate = (value, key) => key === 'b';
    const eachFunc = (coll, iteratee) => {
      for (const key in coll) {
        iteratee(coll[key], key, coll);
      }
    };

    const result = baseFindKey(collection, predicate, eachFunc);

    expect(result).toBe('b');
  });

  it('should return undefined if element is not found', () => {
    const collection = { a: 1, b: 2, c: 3 };
    const predicate = (value, key) => key === 'd';
    const eachFunc = (coll, iteratee) => {
      for (const key in coll) {
        iteratee(coll[key], key, coll);
      }
    };

    const result = baseFindKey(collection, predicate, eachFunc);

    expect(result).toBeUndefined();
  });
});
