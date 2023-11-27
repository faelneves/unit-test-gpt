import mapKey from './mapKey';

describe('mapKey', () => {
  it('should return an object with mapped keys', () => {
    const object = { a: 1, b: 2 };
    const iteratee = (value, key) => key + value;

    const result = mapKey(object, iteratee);

    expect(result).toEqual({ a1: 1, b2: 2 });
  });

  it('should return an empty object if input object is empty', () => {
    const object = {};
    const iteratee = (value, key) => key + value;

    const result = mapKey(object, iteratee);

    expect(result).toEqual({});
  });

  it('should return the same object if iteratee function does not change keys', () => {
    const object = { a: 1, b: 2 };
    const iteratee = (value, key) => key;

    const result = mapKey(object, iteratee);

    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should return the same object with modified keys if iteratee function modifies keys', () => {
    const object = { a: 1, b: 2 };
    const iteratee = (value, key) => key.toUpperCase();

    const result = mapKey(object, iteratee);

    expect(result).toEqual({ A: 1, B: 2 });
  });

  it('should ignore non-enumerable properties on the object', () => {
    const object = Object.create({ a: 1 }, { b: { value: 2, enumerable: false } });
    const iteratee = (value, key) => key + value;

    const result = mapKey(object, iteratee);

    expect(result).toEqual({ a1: 1 });
  });
});
