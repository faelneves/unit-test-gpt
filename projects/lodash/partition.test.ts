import partition from './partition';

describe('partition', () => {
  it('should split the collection into two groups based on the predicate', () => {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': false },
      { 'user': 'fred',    'age': 40, 'active': true },
      { 'user': 'pebbles', 'age': 1,  'active': false }
    ];

    const result = partition(users, ({ active }) => active);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual([{ 'user': 'fred', 'age': 40, 'active': true }]);
    expect(result[1]).toEqual([
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': false }
    ]);
  });

  it('should return empty arrays if the collection is empty', () => {
    const result = partition([], ({ active }) => active);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual([]);
    expect(result[1]).toEqual([]);
  });

  it('should handle objects as collection', () => {
    const collection = {
      'a': { name: 'Alice', age: 20 },
      'b': { name: 'Bob', age: 25 },
      'c': { name: 'Charlie', age: 30 },
    };

    const result = partition(collection, ({ age }) => age >= 25);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual([
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 30 },
    ]);
    expect(result[1]).toEqual([
      { name: 'Alice', age: 20 },
    ]);
  });
});
