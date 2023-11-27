import takeRightWhile from './takeRightWhile';

describe('takeRightWhile', () => {
  it('should return an empty array if the input array is empty', () => {
    const result = takeRightWhile([], () => true);
    expect(result).toEqual([]);
  });

  it('should return an empty array if the input array is null or undefined', () => {
    const result1 = takeRightWhile(null, () => true);
    const result2 = takeRightWhile(undefined, () => true);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  it('should return a new array containing the elements from the end that satisfy the predicate', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': true }
    ];

    const result = takeRightWhile(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'fred', 'active': true }, { 'user': 'pebbles', 'active': true }]);
  });

  it('should return an empty array if no elements satisfy the predicate', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': false }
    ];

    const result = takeRightWhile(users, ({ active }) => active);
    expect(result).toEqual([]);
  });

  it('should pass the value, index, and array to the predicate function', () => {
    const array = [1, 2, 3];
    const predicate = jest.fn();
    takeRightWhile(array, predicate);

    expect(predicate).toHaveBeenCalledTimes(3);
    expect(predicate.mock.calls[0]).toEqual([3, 2, array]);
    expect(predicate.mock.calls[1]).toEqual([2, 1, array]);
    expect(predicate.mock.calls[2]).toEqual([1, 0, array]);
  });
});
