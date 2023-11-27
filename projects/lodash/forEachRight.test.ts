import forEachRight from "./forEachRight";

describe("forEachRight", () => {
  it("should iterate over an array from right to left", () => {
    const array = [1, 2, 3];
    const result: number[] = [];

    forEachRight(array, (value) => {
      result.push(value);
    });

    expect(result).toEqual([3, 2, 1]);
  });

  it("should iterate over an object from right to left", () => {
    const object = { a: 1, b: 2, c: 3 };
    const result: number[] = [];

    forEachRight(object, (value) => {
      result.push(value);
    });

    expect(result).toEqual([3, 2, 1]);
  });

  it("should handle empty arrays", () => {
    const array: number[] = [];
    const result: number[] = [];

    forEachRight(array, (value) => {
      result.push(value);
    });

    expect(result).toEqual([]);
  });

  it("should handle empty objects", () => {
    const object: { [key: string]: number } = {};
    const result: number[] = [];

    forEachRight(object, (value) => {
      result.push(value);
    });

    expect(result).toEqual([]);
  });
});
