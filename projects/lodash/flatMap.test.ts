import flatMap from './flatMap';

describe('flatMap', () => {
  it('should return a flattened array of values', () => {
    const collection = [1, 2, 3];
    const iteratee = (value) => [value, value];
    const result = flatMap(collection, iteratee);
  
    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should return an empty array for an empty collection', () => {
    const collection = [];
    const iteratee = (value) => [value, value];
    const result = flatMap(collection, iteratee);
  
    expect(result).toEqual([]);
  });

  it('should return an empty array for a collection with no iterable values', () => {
    const collection = [null, undefined, true, false, 0];
    const iteratee = (value) => [value, value];
    const result = flatMap(collection, iteratee);
  
    expect(result).toEqual([]);
  });

  it('should handle objects as collections and iterate over their values', () => {
    const collection = { a: 1, b: 2, c: 3 };
    const iteratee = (value) => [value, value];
    const result = flatMap(collection, iteratee);
  
    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });
});
