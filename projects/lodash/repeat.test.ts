import repeat from './repeat';

describe('repeat', () => {
  it('should repeat the given string n times', () => {
    expect(repeat('*', 3)).toBe('***');
    expect(repeat('abc', 2)).toBe('abcabc');
  });

  it('should return an empty string when n is 0', () => {
    expect(repeat('abc', 0)).toBe('');
  });

  it('should return an empty string when string is empty', () => {
    expect(repeat('', 3)).toBe('');
  });

  it('should return an empty string when n is less than 1', () => {
    expect(repeat('*')).toBe('');
    expect(repeat('abc', -1)).toBe('');
  });

  it('should return an empty string when n is greater than Number.MAX_SAFE_INTEGER', () => {
    expect(repeat('*', Number.MAX_SAFE_INTEGER + 1)).toBe('');
  });
});
