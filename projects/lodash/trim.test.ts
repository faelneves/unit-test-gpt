import trim from './trim';

describe('trim', () => {
  it('should remove leading and trailing whitespace', () => {
    expect(trim('  abc  ')).toBe('abc');
  });

  it('should remove leading and trailing specified characters', () => {
    expect(trim('-_-abc-_-', '_-')).toBe('abc');
  });

  it('should return empty string if input is empty', () => {
    expect(trim('')).toBe('');
  });

  it('should return empty string if input is null or undefined', () => {
    expect(trim(null)).toBe('');
    expect(trim(undefined)).toBe('');
  });

  it('should return the same string if trimming characters are not found', () => {
    expect(trim('abc', '_-')).toBe('abc');
  });

  it('should handle special characters', () => {
    expect(trim('  @#$  ', '@#$')).toBe('');
  });
});
