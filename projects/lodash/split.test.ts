import split from './split';

describe('split', () => {
  it('should return an empty array when string is empty', () => {
    expect(split('')).toEqual([]);
  });

  it('should split the string into segments based on the separator', () => {
    expect(split('a-b-c', '-')).toEqual(['a', 'b', 'c']);
  });

  it('should split the string into segments based on the separator with a limit', () => {
    expect(split('a-b-c', '-', 2)).toEqual(['a', 'b']);
  });

  it('should return an empty array when limit is 0', () => {
    expect(split('a-b-c', '-', 0)).toEqual([]);
  });

  it('should handle separator pattern as a regular expression', () => {
    expect(split('a-b-c', /-/)).toEqual(['a', 'b', 'c']);
  });

  it('should handle separator pattern as an empty string', () => {
    expect(split('a-b-c', '')).toEqual(['a-b-c']);
  });

  it('should handle string with in Unicode characters', () => {
    expect(split('🌍🌎🌏', '🌎')).toEqual(['🌍', '🌏']);
  });
});
