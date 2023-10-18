export const isPalindrome = (word) => {
  let reverseWord = word.split("").reverse().join("").toLowerCase();
  let lowercaseWord = word.toLowerCase();
  return lowercaseWord === reverseWord;
}
