import size from './size';

describe('size', () => {
  it('should return the correct size for arrays', () => {
    expect(size([])).toBe(0);
    expect(size([1, 2, 3])).toBe(3);
    expect(size([1, 2, 3, 4, 5])).toBe(5);
  });

  it('should return the correct size for objects', () => {
    expect(size({})).toBe(0);
    expect(size({ a: 1, b: 2 })).toBe(2);
    expect(size({ a: 1, b: 2, c: 3 })).toBe(3);
  });

  it('should return the correct size for strings', () => {
    expect(size('')).toBe(0);
    expect(size('pebbles')).toBe(7);
    expect(size('hello world')).toBe(11);
  });
  
  it('should return the correct size for maps', () => {
    const map = new Map();
    expect(size(map)).toBe(0);
    map.set('a', 1);
    expect(size(map)).toBe(1);
    map.set('b', 2);
    expect(size(map)).toBe(2);
  });
  
  it('should return the correct size for sets', () => {
    const set = new Set();
    expect(size(set)).toBe(0);
    set.add(1);
    expect(size(set)).toBe(1);
    set.add(2);
    expect(size(set)).toBe(2);
  });
  
  it('should return 0 for null or undefined', () => {
    expect(size(null)).toBe(0);
    expect(size(undefined)).toBe(0);
  });
});
