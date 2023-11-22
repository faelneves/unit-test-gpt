import arrayEachRight from './arrayEachRight'

describe('arrayEachRight', () => {
  it('should iterate over each element in the array from right to left', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = jest.fn()
    
    arrayEachRight(array, iteratee)
    
    expect(iteratee).toHaveBeenCalledTimes(5)
    expect(iteratee).toHaveBeenNthCalledWith(1, 5, 4, array)
    expect(iteratee).toHaveBeenNthCalledWith(2, 4, 3, array)
    expect(iteratee).toHaveBeenNthCalledWith(3, 3, 2, array)
    expect(iteratee).toHaveBeenNthCalledWith(4, 2, 1, array)
    expect(iteratee).toHaveBeenNthCalledWith(5, 1, 0, array)
  })

  it('should break the iteration if the iteratee returns false', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = jest.fn((item) => item !== 3)
    
    arrayEachRight(array, iteratee)
    
    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenNthCalledWith(1, 5, 4, array)
    expect(iteratee).toHaveBeenNthCalledWith(2, 4, 3, array)
    expect(iteratee).toHaveBeenNthCalledWith(3, 3, 2, array)
  })

  it('should return the original array', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = jest.fn()
    
    const result = arrayEachRight(array, iteratee)
    
    expect(result).toBe(array)
  })
})
