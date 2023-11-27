import findLastKey from './findLastKey';

describe('findLastKey', () => {
  it('should return the last key that matches the predicate', () => {
    const users = {
      'barney':  { 'age': 36, 'active': true },
      'fred':    { 'age': 40, 'active': false },
      'pebbles': { 'age': 1,  'active': true }
    };

    const result = findLastKey(users, ({ age }) => age < 40);
    
    expect(result).toBe('pebbles');
  });

  it('should return undefined if no key matches the predicate', () => {
    const users = {
      'barney':  { 'age': 36, 'active': true },
      'fred':    { 'age': 40, 'active': false },
      'pebbles': { 'age': 1,  'active': true }
    };

    const result = findLastKey(users, ({ age }) => age > 50);
    
    expect(result).toBeUndefined();
  });
});
