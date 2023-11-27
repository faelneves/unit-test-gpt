import findLastIndex from './findLastIndex';

describe('findLastIndex', () => {
  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  it('should return the index of the found element', () => {
    const result = findLastIndex(users, ({ user }) => user === 'pebbles');
    expect(result).toBe(2);
  });

  it('should return -1 if no element is found', () => {
    const result = findLastIndex(users, ({ user }) => user === 'dino');
    expect(result).toBe(-1);
  });

  it('should start searching from the specified index', () => {
    const result = findLastIndex(users, ({ user }) => user === 'barney', 1);
    expect(result).toBe(0);
  });

  it('should handle negative `fromIndex` values correctly', () => {
    const result = findLastIndex(users, ({ user }) => user === 'pebbles', -2);
    expect(result).toBe(-1);
  });
});
