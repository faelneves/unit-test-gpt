import baseUniq from './baseUniq'

describe('baseUniq', () => {
  it('should return a new duplicate-free array', () => {
    const array = [1, 2, 2, 3, 4, 4, 5, 5]
    const result = baseUniq(array)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should invoke iteratee for each element in the array', () => {
    const array = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'a' }]
    const iteratee = jest.fn(item => item.value)
    const result = baseUniq(array, iteratee)
    expect(iteratee).toHaveBeenCalledTimes(3)
    expect(iteratee).toHaveBeenCalledWith({ id: 1, value: 'a' })
    expect(iteratee).toHaveBeenCalledWith({ id: 2, value: 'b' })
    expect(iteratee).toHaveBeenCalledWith({ id: 3, value: 'a' })
    expect(result).toEqual([{ id: 1, value: 'a' }, { id: 2, value: 'b' }])
  })

  it('should compare elements using the comparator function', () => {
    const array = [1, 2, 2, 3, 4, 4, 5, 5]
    const comparator = jest.fn((a, b) => a === b)
    const result = baseUniq(array, null, comparator)
    expect(comparator).toHaveBeenCalledTimes(28) // called 7 times for each element
    expect(comparator).toHaveBeenCalledWith(1, 1)
    expect(comparator).toHaveBeenCalledWith(1, 2)
    expect(comparator).toHaveBeenCalledWith(1, 3)
    expect(comparator).toHaveBeenCalledWith(1, 4)
    expect(comparator).toHaveBeenCalledWith(1, 5)
    expect(comparator).toHaveBeenCalledWith(2, 1)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
