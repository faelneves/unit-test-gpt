import escapeRegExp from './escapeRegExp';

describe('escapeRegExp', () => {
  it('should escape special characters in a string', () => {
    expect(escapeRegExp('[lodash](https://lodash.com/)')).toBe('\\[lodash\\]\\(https://lodash\\.com/\\)');
    expect(escapeRegExp('^$.*+?()[]{}|')).toBe('\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|');
    expect(escapeRegExp('abc123')).toBe('abc123');
  });

  it('should return an empty string for falsy values', () => {
    expect(escapeRegExp(null)).toBe('');
    expect(escapeRegExp(undefined)).toBe('');
    expect(escapeRegExp('')).toBe('');
  });

  it('should not escape already escaped characters', () => {
    expect(escapeRegExp('\\[lodash\\]\\(https://lodash\\.com/\\)')).toBe('\\[lodash\\]\\(https://lodash\\.com/\\)');
    expect(escapeRegExp('\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|')).toBe('\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|');
  });
});
