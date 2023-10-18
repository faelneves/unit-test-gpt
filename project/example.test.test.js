javascript
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

describe("classNames", () => {
  test("should concatenate class names when given a string", () => {
    expect(classNames("foo", "bar")).toEqual("foo bar");
  });

  test("should concatenate class names when given an array", () => {
    expect(classNames(["foo", "bar"])).toEqual("foo bar");
  });

  test("should ignore falsy values when concatenating class names", () => {
    expect(classNames("foo", null, "bar", undefined)).toEqual("foo bar");
  });

  test("should return an empty string when no class names are provided", () => {
    expect(classNames()).toEqual("");
  });
});
