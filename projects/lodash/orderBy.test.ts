import orderBy from './orderBy';

describe('orderBy', () => {
  it('should return an empty array if the collection is null', () => {
    expect(orderBy(null)).toEqual([]);
  });

  it('should return an empty array if no iteratees are provided', () => {
    const collection = [{ 'name': 'John' }, { 'name': 'Alice' }];
    expect(orderBy(collection)).toEqual([]);
  });

  it('should return a sorted array based on the iteratees and orders provided', () => {
    const collection = [
      { 'user': 'fred', 'age': 48 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'barney', 'age': 36 }
    ];

    // Sort by `user` in ascending order and by `age` in descending order.
    const sortedByUserAndAge = orderBy(collection, ['user', 'age'], ['asc', 'desc']);
    expect(sortedByUserAndAge).toEqual([
      { 'user': 'barney', 'age': 36 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred', 'age': 48 },
      { 'user': 'fred', 'age': 40 }
    ]);

    // Sort by `user` then by `age` using custom compare functions for each
    const sortedByUserAndAgeWithCompareFunctions = orderBy(collection, ['user', 'age'], [
      (a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }),
      (a, b) => a - b,
    ]);
    expect(sortedByUserAndAgeWithCompareFunctions).toEqual([
      { 'user': 'barney', 'age': 34 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'fred', 'age': 48 }
    ]);
  });
});
