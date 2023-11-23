import asciiSize from './asciiSize';

describe('asciiSize', () => {
  it('should return the length of the string', () => {
    const string = 'hello world';
    expect(asciiSize(string)).toBe(11);
  });

  it('should return 0 when the string is empty', () => {
    const string = '';
    expect(asciiSize(string)).toBe(0);
  });

  it('should return 1 when the string contains a single character', () => {
    const string = 'a';
    expect(asciiSize(string)).toBe(1);
  });

  it('should return the correct length when the string contains special characters', () => {
    const string = '%$^@&*!';
    expect(asciiSize(string)).toBe(7);
  });
});
