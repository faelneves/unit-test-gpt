import trimEnd from './trimEnd';

describe('trimEnd', () => {
  it('should remove trailing whitespace', () => {
    expect(trimEnd('  abc  ')).toBe('  abc');
  });

  it('should remove specified characters', () => {
    expect(trimEnd('-_-abc-_-', '_-')).toBe('-_-abc');
  });

  it('should return empty string if string is empty', () => {
    expect(trimEnd('')).toBe('');
  });

  it('should return empty string if characters are not provided', () => {
    expect(trimEnd('abc')).toBe('abc');
  });
});
