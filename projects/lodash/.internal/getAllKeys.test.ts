import getAllKeys from "./getAllKeys";
import getSymbols from "./getSymbols";
import keys from "../keys";

describe("getAllKeys", () => {
  it("should return an array of property names and symbols for an object", () => {
    const obj = {
      a: 1,
      b: 2,
    };
    const result = getAllKeys(obj);
    expect(result).toEqual(["a", "b"]);
  });

  it("should return an array of property names, symbols, and array indices for an array", () => {
    const arr = [1, 2, 3];
    const result = getAllKeys(arr);
    expect(result).toEqual(["0", "1", "2", Symbol.iterator]);
  });

  it("should return an array of property names and symbols for an object with symbols", () => {
    const obj = {
      a: 1,
      [Symbol("b")]: 2,
    };
    const result = getAllKeys(obj);
    expect(result).toEqual(["a", Symbol("b")]);
  });

  it("should return an empty array if the object is empty", () => {
    const obj = {};
    const result = getAllKeys(obj);
    expect(result).toEqual([]);
  });
});
