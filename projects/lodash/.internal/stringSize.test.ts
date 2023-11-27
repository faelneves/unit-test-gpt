import stringSize from './stringSize'

describe('stringSize', () => {
  it('should return the number of symbols in a string', () => {
    // ASCII string
    expect(stringSize('hello')).toBe(5);

    // Unicode string
    expect(stringSize('🌍')).toBe(1);

    // Mix of ASCII and Unicode characters
    expect(stringSize('hello 🌍')).toBe(8);

    // Empty string
    expect(stringSize('')).toBe(0);
  });
});
