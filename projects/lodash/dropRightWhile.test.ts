import dropRightWhile from './dropRightWhile';

describe('dropRightWhile', () => {
  it('should drop elements from the end until the predicate returns falsey', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': true }
    ];

    const result = dropRightWhile(users, ({ active }) => active);

    expect(result).toEqual([{ 'user': 'barney',  'active': false }]);
  });

  it('should return an empty array if the input array is empty', () => {
    const result = dropRightWhile([], ({ active }) => active);

    expect(result).toEqual([]);
  });

  it('should return an empty array if the input array is null or undefined', () => {
    const result1 = dropRightWhile(null, ({ active }) => active);
    const result2 = dropRightWhile(undefined, ({ active }) => active);

    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });
});
