import sortedLastIndexBy from "./sortedLastIndexBy";
import baseSortedIndexBy from "./.internal/baseSortedIndexBy";

describe("sortedLastIndexBy", () => {
  it("should return the index where the value should be inserted into the sorted array", () => {
    const objects = [{ n: 4 }, { n: 5 }];
    const iteratee = ({ n }) => n;

    expect(sortedLastIndexBy(objects, { n: 4 }, iteratee)).toBe(1);
    expect(sortedLastIndexBy(objects, { n: 5 }, iteratee)).toBe(2);
    expect(sortedLastIndexBy(objects, { n: 6 }, iteratee)).toBe(2);
    expect(sortedLastIndexBy(objects, { n: 3 }, iteratee)).toBe(0);
  });

  it("should return the index where the value should be inserted when array contains duplicated values", () => {
    const objects = [{ n: 4 }, { n: 4 }, { n: 4 }, { n: 5 }];
    const iteratee = ({ n }) => n;

    expect(sortedLastIndexBy(objects, { n: 4 }, iteratee)).toBe(3);
    expect(sortedLastIndexBy(objects, { n: 5 }, iteratee)).toBe(4);
    expect(sortedLastIndexBy(objects, { n: 6 }, iteratee)).toBe(4);
    expect(sortedLastIndexBy(objects, { n: 3 }, iteratee)).toBe(0);
  });

  it("should return the index at which value can be inserted to maintain the sorted order when given an empty array", () => {
    const objects = [];
    const iteratee = ({ n }) => n;

    expect(sortedLastIndexBy(objects, { n: 4 }, iteratee)).toBe(0);
    expect(sortedLastIndexBy(objects, { n: 5 }, iteratee)).toBe(0);
    expect(sortedLastIndexBy(objects, { n: 6 }, iteratee)).toBe(0);
    expect(sortedLastIndexBy(objects, { n: 3 }, iteratee)).toBe(0);
  });

  it("should return the index at which value can be inserted to maintain the sorted order when the array only contains one element", () => {
    const objects = [{ n: 4 }];
    const iteratee = ({ n }) => n;

    expect(sortedLastIndexBy(objects, { n: 4 }, iteratee)).toBe(1);
    expect(sortedLastIndexBy(objects, { n: 5 }, iteratee)).toBe(1);
    expect(sortedLastIndexBy(objects, { n: 6 }, iteratee)).toBe(1);
    expect(sortedLastIndexBy(objects, { n: 3 }, iteratee)).toBe(0);
  });

  it("should return the index at which value can be inserted to maintain the sorted order when the array only contains two identical elements", () => {
    const objects = [{ n: 4 }, { n: 4 }];
    const iteratee = ({ n }) => n;

    expect(sortedLastIndexBy(objects, { n: 4 }, iteratee)).toBe(2);
    expect(sortedLastIndexBy(objects, { n: 5 }, iteratee)).toBe(2);
    expect(sortedLastIndexBy(objects, { n: 6 }, iteratee)).toBe(2);
    expect(sortedLastIndexBy(objects, { n: 3 }, iteratee)).toBe(0);
  });
});
