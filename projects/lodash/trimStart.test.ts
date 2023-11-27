import trimStart from './trimStart';

describe('trimStart', () => {
  it('should trim leading whitespace from the string', () => {
    const result = trimStart('  abc  ');

    expect(result).toBe('abc  ');
  });

  it('should trim leading specified characters from the string', () => {
    const result = trimStart('-_-abc-_-', '_-');

    expect(result).toBe('abc-_-');
  });

  it('should return an empty string if the input string is empty', () => {
    const result = trimStart('');

    expect(result).toBe('');
  });

  it('should return an empty string if the input string is null', () => {
    const result = trimStart(null);

    expect(result).toBe('');
  });

  it('should return the input string if the input string contains no leading whitespace or specified characters', () => {
    const result = trimStart('abc');

    expect(result).toBe('abc');
  });

  it('should return the input string if the input string contains only leading whitespace or specified characters', () => {
    const result = trimStart('  ', ' ');

    expect(result).toBe('  ')
  });
});
