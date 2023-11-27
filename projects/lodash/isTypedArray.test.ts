import isTypedArray from "./isTypedArray";

describe("isTypedArray", () => {
  it("should return true for a typed array", () => {
    const typedArray = new Uint8Array();
    expect(isTypedArray(typedArray)).toBeTruthy();
  });

  it("should return false for an array", () => {
    const array = [];
    expect(isTypedArray(array)).toBeFalsy();
  });

  it("should return false for a regular object", () => {
    const obj = {};
    expect(isTypedArray(obj)).toBeFalsy();
  });

  it("should return false for null", () => {
    expect(isTypedArray(null)).toBeFalsy();
  });

  it("should return false for undefined", () => {
    expect(isTypedArray(undefined)).toBeFalsy();
  });

  it("should return false for a string", () => {
    const str = "Hello";
    expect(isTypedArray(str)).toBeFalsy();
  });

  it("should return false for a number", () => {
    const num = 42;
    expect(isTypedArray(num)).toBeFalsy();
  });
});
