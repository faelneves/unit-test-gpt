import baseForRight from './baseForRight'

describe('baseForRight', () => {
  it('should iterate over each property in reverse order', () => {
    const object = { a: 1, b: 2, c: 3 }
    const iteratee = jest.fn()
    const keysFunc = Object.keys

    baseForRight(object, iteratee, keysFunc)

    expect(iteratee).toHaveBeenNthCalledWith(1, 3, 'c', object)
    expect(iteratee).toHaveBeenNthCalledWith(2, 2, 'b', object)
    expect(iteratee).toHaveBeenNthCalledWith(3, 1, 'a', object)
    expect(iteratee).toHaveBeenCalledTimes(3)
  })

  it('should break iteration when iteratee returns false', () => {
    const object = { a: 1, b: 2, c: 3 }
    const iteratee = jest.fn((value) => value !== 2)
    const keysFunc = Object.keys

    baseForRight(object, iteratee, keysFunc)

    expect(iteratee).toHaveBeenNthCalledWith(1, 3, 'c', object)
    expect(iteratee).toHaveBeenNthCalledWith(2, 2, 'b', object)
    expect(iteratee).toHaveBeenCalledTimes(2)
  })
})
