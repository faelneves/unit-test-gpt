import { isPalindrome } from './example';

describe('isPalindrome', () => {
  it('should return true for a palindrome word', () => {
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
  });

  it('should return false for a non-palindrome word', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
  });

  it('should handle empty string and single character input', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
  });

  it('should ignore leading and trailing whitespaces', () => {
    expect(isPalindrome(' level ')).toBe(true);
    expect(isPalindrome('      radar      ')).toBe(true);
  });

  it('should ignore case when checking for palindrome', () => {
    expect(isPalindrome('LeveL')).toBe(true);
    expect(isPalindrome('Radar')).toBe(true);
  });
});
