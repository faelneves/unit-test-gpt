import mapValue from './mapValue';

describe('mapValue', () => {
  it('should return an empty object when given an empty object', () => {
    const object = {};
    const iteratee = jest.fn();
    const result = mapValue(object, iteratee);
    expect(result).toEqual({});
    expect(iteratee).not.toBeCalled();
  });

  it('should map the values of the object using the provided iteratee', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3
    };
    const doubleIteratee = jest.fn((value) => value * 2);
    const result = mapValue(object, doubleIteratee);
    expect(result).toEqual({
      'a': 2,
      'b': 4,
      'c': 6
    });
    expect(doubleIteratee).toHaveBeenCalledTimes(3);
    expect(doubleIteratee.mock.calls[0]).toEqual([1, 'a', object]);
    expect(doubleIteratee.mock.calls[1]).toEqual([2, 'b', object]);
    expect(doubleIteratee.mock.calls[2]).toEqual([3, 'c', object]);
  });

  it('should work with non-string keys', () => {
    const object = {
      1: 'one',
      2: 'two',
      3: 'three'
    };
    const capitalizeIteratee = jest.fn((value) => value.toUpperCase());
    const result = mapValue(object, capitalizeIteratee);
    expect(result).toEqual({
      1: 'ONE',
      2: 'TWO',
      3: 'THREE'
    });
    expect(capitalizeIteratee).toHaveBeenCalledTimes(3);
    expect(capitalizeIteratee.mock.calls[0]).toEqual(['one', 1, object]);
    expect(capitalizeIteratee.mock.calls[1]).toEqual(['two', 2, object]);
    expect(capitalizeIteratee.mock.calls[2]).toEqual(['three', 3, object]);
  });
});
