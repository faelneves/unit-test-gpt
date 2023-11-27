import baseReduce from './baseReduce'

describe('baseReduce', () => {
  it('should return the accumulated value when iterating over an array', () => {
    const collection = [1, 2, 3, 4, 5]
    const iteratee = (acc, value) => acc + value
    const accumulator = 0

    expect(baseReduce(collection, iteratee, accumulator, true, Array.prototype.forEach)).toBe(15)
  })

  it('should return the accumulated value when iterating over an object', () => {
    const collection = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    const iteratee = (acc, value) => acc + value
    const accumulator = 0

    expect(baseReduce(collection, iteratee, accumulator, true, Object.keys)).toBe(15)
  })

  it('should return the accumulated value with initial value from the first element of collection', () => {
    const collection = [1, 2, 3, 4, 5]
    const iteratee = (acc, value) => acc + value

    expect(baseReduce(collection, iteratee, undefined, false, Array.prototype.forEach)).toBe(15)
  })

  it('should return the accumulated value with initial value from the last element of collection', () => {
    const collection = [1, 2, 3, 4, 5]
    const iteratee = (acc, value) => acc + value

    expect(baseReduce(collection, iteratee, undefined, true, Array.prototype.forEachRight)).toBe(15)
  })
})
