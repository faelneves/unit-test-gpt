import endsWith from './endsWith';

describe('endsWith', () => {
  it('should return true if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', '')).toBe(true);
  });
  
  it('should return false if string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'd')).toBe(false);
    expect(endsWith('', 'a')).toBe(false);
  });
  
  it('should return true if string ends with target within the specified position', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
    expect(endsWith('abc', 'c', 2)).toBe(false);
    expect(endsWith('abc', 'a', 2)).toBe(true);
  });
  
  it('should handle negative position correctly', () => {
    expect(endsWith('abc', 'c', -1)).toBe(false);
    expect(endsWith('abc', 'c', -3)).toBe(true);
    expect(endsWith('abc', 'c', -4)).toBe(true);
  });
  
  it('should return true if string ends with empty target after the specified position', () => {
    expect(endsWith('abc', '', 2)).toBe(true);
    expect(endsWith('abc', '', -1)).toBe(true);
    expect(endsWith('abc', '', -3)).toBe(true);
    expect(endsWith('', '', 0)).toBe(true);
    expect(endsWith('', '', -1)).toBe(true);
  });
});
