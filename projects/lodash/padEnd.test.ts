import padEnd from './padEnd';

describe('padEnd', () => {
  it('should pad the string on the right side if it\'s shorter than length', () => {
    expect(padEnd('abc', 6)).toBe('abc   ');
    expect(padEnd('abc', 10)).toBe('abc       ');
  });

  it('should truncate padding characters if they exceed length', () => {
    expect(padEnd('abc', 6, '_-')).toBe('abc_-_');
    expect(padEnd('abc', 10, '0123456789')).toBe('abc0123456');
  });

  it('should return the string if it\'s longer than or equal to length', () => {
    expect(padEnd('abc', 2)).toBe('abc');
    expect(padEnd('abc', 3)).toBe('abc');
  });

  it('should return an empty string if the input string is empty', () => {
    expect(padEnd('', 6, '123')).toBe('');
    expect(padEnd('', 0)).toBe('');
  });
});
