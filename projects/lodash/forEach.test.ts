import forEach from "./forEach";

describe("forEach", () => {
  it("should iterate over an array and invoke iteratee for each element", () => {
    const array = [1, 2, 3];
    const iteratee = jest.fn();

    forEach(array, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(1, 0, array);
    expect(iteratee).toHaveBeenCalledWith(2, 1, array);
    expect(iteratee).toHaveBeenCalledWith(3, 2, array);
  });

  it("should iterate over an object and invoke iteratee for each key-value pair", () => {
    const object = { a: 1, b: 2, c: 3 };
    const iteratee = jest.fn();

    forEach(object, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(1, "a", object);
    expect(iteratee).toHaveBeenCalledWith(2, "b", object);
    expect(iteratee).toHaveBeenCalledWith(3, "c", object);
  });

  it("should iterate over an array-like object and invoke iteratee for each element", () => {
    const arrayLikeObject = { 0: 1, 1: 2, 2: 3, length: 3 };
    const iteratee = jest.fn();

    forEach(arrayLikeObject, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(1, 0, arrayLikeObject);
    expect(iteratee).toHaveBeenCalledWith(2, 1, arrayLikeObject);
    expect(iteratee).toHaveBeenCalledWith(3, 2, arrayLikeObject);
  });

  it("should iterate over an empty collection and not invoke iteratee", () => {
    const emptyCollection = [];
    const iteratee = jest.fn();

    forEach(emptyCollection, iteratee);

    expect(iteratee).not.toHaveBeenCalled();
  });

  it("should iterate over a collection and stop early when iteratee returns false", () => {
    const collection = [1, 2, 3, 4, 5];
    const iteratee = jest.fn(value => {
      if (value === 3) {
        return false;
      }
    });

    forEach(collection, iteratee);

    expect(iteratee).toHaveBeenCalledTimes(3);
    expect(iteratee).toHaveBeenCalledWith(1, 0, collection);
    expect(iteratee).toHaveBeenCalledWith(2, 1, collection);
    expect(iteratee).toHaveBeenCalledWith(3, 2, collection);
  });
});
