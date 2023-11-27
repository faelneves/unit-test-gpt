import isMatchWith from "./isMatchWith";

describe("isMatchWith", () => {
  it("should return true if object is a match", () => {
    const object = { greeting: "hello" };
    const source = { greeting: "hi" };

    expect(isMatchWith(object, source)).toBe(true);
  });

  it("should return false if object is not a match", () => {
    const object = { greeting: "hello" };
    const source = { greeting: "hello" };

    expect(isMatchWith(object, source)).toBe(false);
  });

  it("should use customizer to customize comparisons", () => {
    const object = { greeting: "hello" };
    const source = { greeting: "hi" };

    function customizer(objValue, srcValue) {
      if (/^h(?:i|ello)$/.test(objValue) && /^h(?:i|ello)$/.test(srcValue)) {
        return true;
      }
    }

    expect(isMatchWith(object, source, customizer)).toBe(true);
  });

  it("should return false if no customizer provided and object does not match", () => {
    const object = { greeting: "hello" };
    const source = { greeting: "hi" };

    expect(isMatchWith(object, source)).toBe(false);
  });

  it("should handle deep comparison", () => {
    const object = { greeting: { message: "hello" } };
    const source = { greeting: { message: "hi" } };

    expect(isMatchWith(object, source)).toBe(false);
  });

  it("should handle arrays in the object and source", () => {
    const object = { names: ["John", "Jane"] };
    const source = { names: ["Jane", "John"] };

    expect(isMatchWith(object, source)).toBe(false);
  });
});
