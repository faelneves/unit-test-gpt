import dropWhile from './dropWhile';

describe('dropWhile', () => {
  it('should return an empty array if the input array is empty', () => {
    const result = dropWhile([], () => {});
    expect(result).toEqual([]);
  });

  it('should return the input array if the predicate function returns truthy for all elements', () => {
    const array = [1, 2, 3, 4];
    const result = dropWhile(array, () => true);
    expect(result).toEqual(array);
  });

  it('should drop elements from the beginning until the predicate function returns falsey', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': false }
    ];

    const result = dropWhile(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'pebbles', 'active': false }]);
  });

  it('should not drop any elements if the predicate function returns falsey for the first element', () => {
    const array = [0, 1, 2, 3, 4];
    const result = dropWhile(array, () => false);
    expect(result).toEqual(array);
  });

  it('should drop all elements if the predicate function returns truthy for all elements', () => {
    const array = [1, 2, 3, 4];
    const result = dropWhile(array, () => true);
    expect(result).toEqual([]);
  });

  it('should drop elements until the predicate function returns falsey for an element', () => {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const result = dropWhile(array, (value) => value <= 3);
    expect(result).toEqual([4, 5, 4, 3, 2, 1]);
  });
});
