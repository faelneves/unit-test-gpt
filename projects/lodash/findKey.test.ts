import findKey from './findKey';

describe('findKey', () => {
  it('should return the key of the first element that satisfies the predicate', () => {
    const users = {
      'barney': { 'age': 36, 'active': true },
      'fred': { 'age': 40, 'active': false },
      'pebbles': { 'age': 1, 'active': true }
    };

    expect(findKey(users, ({ age }) => age < 40)).toEqual('barney');
  });

  it('should return undefined if the object is null', () => {
    expect(findKey(null, () => true)).toBeUndefined();
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const users = {
      'barney': { 'age': 36, 'active': true },
      'fred': { 'age': 40, 'active': false },
      'pebbles': { 'age': 1, 'active': true }
    };

    expect(findKey(users, ({ age }) => age > 50)).toBeUndefined();
  });

  it('should iterate over properties in the original order', () => {
    const object = {
      'a': 1,
      'b': 2,
      'c': 3
    };

    const result = findKey(object, () => true);

    expect(result).toEqual('a');
  });
});
