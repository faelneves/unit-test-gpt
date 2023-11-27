import padStart from './padStart';

describe('padStart', () => {
  it('should pad the string on the left if it is shorter than length using default padding characters', () => {
    expect(padStart('abc', 6)).toBe('   abc');
  });

  it('should pad the string on the left if it is shorter than length using custom padding characters', () => {
    expect(padStart('abc', 6, '_-')).toBe('_-_abc');
  });

  it('should return the string if its length is greater than or equal to length', () => {
    expect(padStart('abc', 2)).toBe('abc');
    expect(padStart('abc', 3)).toBe('abc');
  });

  it('should return an empty string if the string is falsy', () => {
    expect(padStart('', 5)).toBe('');
    expect(padStart(null, 5)).toBe('');
    expect(padStart(undefined, 5)).toBe('');
    expect(padStart(false, 5)).toBe('');
    expect(padStart('', 0)).toBe('');
    expect(padStart(null, 0)).toBe('');
    expect(padStart(undefined, 0)).toBe('');
    expect(padStart(false, 0)).toBe('');
  });
});
