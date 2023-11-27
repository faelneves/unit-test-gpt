import baseEachRight from './baseEachRight'

describe('baseEachRight', () => {
  it('should iterate over an array and invoke the iteratee function for each element', () => {
    const collection = [1, 2, 3, 4]
    const iteratee = jest.fn()

    baseEachRight(collection, iteratee)

    expect(iteratee).toHaveBeenCalledTimes(4)
    expect(iteratee).toHaveBeenNthCalledWith(1, 4, 3, [1, 2, 3, 4])
    expect(iteratee).toHaveBeenNthCalledWith(2, 3, 2, [1, 2, 3, 4])
    expect(iteratee).toHaveBeenNthCalledWith(3, 2, 1, [1, 2, 3, 4])
    expect(iteratee).toHaveBeenNthCalledWith(4, 1, 0, [1, 2, 3, 4])
  })

  it('should iterate over an object and invoke the iteratee function for each property', () => {
    const collection = {
      a: 1,
      b: 2,
      c: 3,
    }
    const iteratee = jest.fn()

    baseEachRight(collection, iteratee)

    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenNthCalledWith(1, 3, 'c', { a: 1, b: 2, c: 3 })
    expect(iteratee).toHaveBeenNthCalledWith(2, 2, 'b', { a: 1, b: 2, c: 3 })
    expect(iteratee).toHaveBeenNthCalledWith(3, 1, 'a', { a: 1, b: 2, c: 3 })
  })

  it('should return the original collection if it is null or undefined', () => {
    const collection = null
    const iteratee = jest.fn()

    const result = baseEachRight(collection, iteratee)

    expect(result).toBeNull()
    expect(iteratee).not.toHaveBeenCalled()
  })

  it('should return the result of baseForOwnRight if the collection is not array-like', () => {
    const collection = 'abc'
    const iteratee = jest.fn()
    const baseForOwnRightResult = 'baseForOwnRightResult'

    jest.mock('./baseForOwnRight', () => {
      return jest.fn(() => baseForOwnRightResult)
    })

    const result = baseEachRight(collection, iteratee)

    expect(result).toBe(baseForOwnRightResult)
    expect(iteratee).not.toHaveBeenCalled()
  })
})
