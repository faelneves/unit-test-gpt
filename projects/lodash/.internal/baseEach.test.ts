describe('baseEach', () => {
  it('should return the collection itself if it is null or undefined', () => {
    expect(baseEach(null, () => {})).toBe(null)
    expect(baseEach(undefined, () => {})).toBe(undefined)
  })

  it('should iterate over an array-like collection and call the iteratee for each element', () => {
    const collection = [1, 2, 3]
    const iteratee = jest.fn()
    baseEach(collection, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(1, 0, collection)
    expect(iteratee).toHaveBeenCalledWith(2, 1, collection)
    expect(iteratee).toHaveBeenCalledWith(3, 2, collection)
  })

  it('should iterate over an object collection and call the iteratee for each own enumerable property', () => {
    const collection = { a: 1, b: 2, c: 3 }
    const iteratee = jest.fn()
    baseEach(collection, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith(1, 'a', collection)
    expect(iteratee).toHaveBeenCalledWith(2, 'b', collection)
    expect(iteratee).toHaveBeenCalledWith(3, 'c', collection)
  })

  it('should break the iteration when the iteratee returns false', () => {
    const collection = [1, 2, 3]
    const iteratee = jest.fn((value) => value !== 2)
    baseEach(collection, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(2)
    expect(iteratee).toHaveBeenCalledWith(1, 0, collection)
    expect(iteratee).toHaveBeenCalledWith(2, 1, collection)
    expect(iteratee).not.toHaveBeenCalledWith(3, 2, collection)
  })
})
