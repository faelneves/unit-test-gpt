import { isPalindrome } from './example.js'

describe("isPalindrome", () => {
  test("should return true for palindrome word", () => {
    expect(isPalindrome("level")).toBe(true);
  });

  test("should return false for non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should return true for palindrome word with spaces", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("should return true for palindrome word with special characters", () => {
    expect(isPalindrome("Madam, in Eden I'm Adam")).toBe(true);
  });

  test("should return true for palindrome word with numbers", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  test("should return false for non-palindrome word with numbers", () => {
    expect(isPalindrome("12342")).toBe(false);
  });
});
