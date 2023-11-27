import reject from './reject';
import filter from './filter';

describe("reject", () => {
  it("should return an empty array if the collection is empty", () => {
    const result = reject([], (n) => n > 0);

    expect(result).toEqual([]);
  });

  it("should return a new array with elements that the predicate does not return true for", () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    const result = reject(users, ({ active }) => active);

    expect(result).toEqual([{ 'user': 'fred', 'active': false }]);
  });

  it("should return a new array with elements that the predicate does not return true for", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = reject(numbers, (n) => n % 2 === 0);

    expect(result).toEqual([1, 3, 5]);
  });

  it("should correctly execute the predicate function", () => {
    const numbers = [1, 2, 3, 4, 5];
    const predicate = jest.fn((n) => n % 2 === 0);

    const result = reject(numbers, predicate);

    expect(predicate).toHaveBeenCalledTimes(numbers.length);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should return an empty array if the predicate returns true for all elements in the collection", () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = reject(numbers, (n) => n % 2 === 0);

    expect(result).toEqual([]);
  });

  it("should return an empty array if the collection is an empty object", () => {
    const obj = {};
    const result = reject(obj, (val) => val > 0);

    expect(result).toEqual([]);
  });

  it("should return a new object with properties that the predicate does not return true for", () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    };
    const result = reject(obj, (val) => val % 2 === 0);

    expect(result).toEqual({ a: 1, c: 3, e: 5 });
  });
});
