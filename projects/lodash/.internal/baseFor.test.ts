import baseFor from "./baseFor"

describe("baseFor", () => {
  it("should iterate over object properties and invoke iteratee function for each property", () => {
    const object = { a: 1, b: 2, c: 3 }
    const iteratee = jest.fn()
    const keysFunc = Object.keys

    baseFor(object, iteratee, keysFunc)

    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(1, "a", object)
    expect(iteratee).toHaveBeenCalledWith(2, "b", object)
    expect(iteratee).toHaveBeenCalledWith(3, "c", object)
  })

  it("should exit early when iteratee function returns false", () => {
    const object = { a: 1, b: 2, c: 3 }
    const iteratee = jest.fn((value) => {
      if (value === 2) {
        return false
      }
    })
    const keysFunc = Object.keys

    baseFor(object, iteratee, keysFunc)

    expect(iteratee).toHaveBeenCalledTimes(2)
    expect(iteratee).toHaveBeenCalledWith(1, "a", object)
    expect(iteratee).toHaveBeenCalledWith(2, "b", object)
  })
})
