import mapObject from './mapObject';

describe('mapObject', () => {
  it('should return an empty array when given an empty object', () => {
    expect(mapObject({}, (value) => value + 1)).toEqual([]);
  });

  it('should map object values using the iteratee function', () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = (value) => value + 1;
    expect(mapObject(object, iteratee)).toEqual([2, 3, 4]);
  });

  it('should pass the key as the second argument to the iteratee function', () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = (_, key) => key;
    expect(mapObject(object, iteratee)).toEqual(['a', 'b', 'c']);
  });

  it('should pass the object as the third argument to the iteratee function', () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = (_, __, obj) => obj;
    expect(mapObject(object, iteratee)).toEqual([object, object, object]);
  });

  it('should maintain the order of the properties', () => {
    const object = { b: 2, a: 1, c: 3 };
    const iteratee = (value) => value + 1;
    expect(mapObject(object, iteratee)).toEqual([2, 3, 4]);
  });
});
