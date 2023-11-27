import baseForOwn from './baseForOwn';
import baseFor from './baseFor';
import keys from '../keys';

describe('baseForOwn', () => {
  it('should iterate over all properties of an object and invoke the iteratee function', () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = jest.fn();

    baseForOwn(object, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', object);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', object);
    expect(iteratee).toHaveBeenCalledWith(3, 'c', object);
  });

  it('should return the original object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = jest.fn();

    const result = baseForOwn(object, iteratee);

    expect(result).toBe(object);
  });

  it('should handle empty objects', () => {
    const object = {};
    const iteratee = jest.fn();

    baseForOwn(object, iteratee);

    expect(iteratee).not.toHaveBeenCalled();
  });

  it('should handle null and undefined objects', () => {
    const iteratee = jest.fn();

    baseForOwn(null, iteratee);
    baseForOwn(undefined, iteratee);

    expect(iteratee).not.toHaveBeenCalled();
  });

  it('should handle objects with prototype properties', () => {
    const object = Object.create({ a: 1 });
    object.b = 2;

    const iteratee = jest.fn();

    baseForOwn(object, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(1);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', object);
  });
});
