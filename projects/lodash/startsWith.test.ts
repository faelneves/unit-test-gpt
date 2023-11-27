import startsWith from './startsWith';

describe('startsWith', () => {
  it('should return true if string starts with target', () => {
    expect(startsWith('abc', 'a')).toBe(true);
    expect(startsWith('hello world', 'he')).toBe(true);
    expect(startsWith('1234567890', '12')).toBe(true);
  });

  it('should return false if string does not start with target', () => {
    expect(startsWith('abc', 'b')).toBe(false);
    expect(startsWith('hello world', 'wo')).toBe(false);
    expect(startsWith('1234567890', '34')).toBe(false);
  });

  it('should return true if string starts with target at specified position', () => {
    expect(startsWith('abc', 'b', 1)).toBe(true);
    expect(startsWith('hello world', 'world', 6)).toBe(true);
    expect(startsWith('1234567890', '567', 4)).toBe(true);
  });

  it('should handle empty string correctly', () => {
    expect(startsWith('', 'a')).toBe(false);
    expect(startsWith('', '')).toBe(true);
  });

  it('should handle undefined and null correctly', () => {
    expect(startsWith(undefined, 'abc')).toBe(false);
    expect(startsWith(null, 'abc')).toBe(true);
    expect(startsWith(null, null)).toBe(true);
  });

  it('should handle negative position correctly', () => {
    expect(startsWith('abc', 'a', -1)).toBe(true);
    expect(startsWith('hello world', 'he', -6)).toBe(false);
    expect(startsWith('1234567890', '12', -20)).toBe(true);
  });

  it('should handle position beyond string length correctly', () => {
    expect(startsWith('abc', 'a', 10)).toBe(false);
    expect(startsWith('hello world', 'wo', 100)).toBe(false);
    expect(startsWith('1234567890', '34', 20)).toBe(false);
  });
});
