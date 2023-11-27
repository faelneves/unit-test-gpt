import baseSortedIndex from './baseSortedIndex'

describe('baseSortedIndex', () => {
  it('should return the index at which value should be inserted into array', () => {
    const array = [10, 20, 30, 40, 50]
    const value = 35
    const result = baseSortedIndex(array, value)
    expect(result).toEqual(3)
  })

  it('should return 0 if the value is smaller than the first element in the array', () => {
    const array = [10, 20, 30, 40, 50]
    const value = 5
    const result = baseSortedIndex(array, value)
    expect(result).toEqual(0)
  })

  it('should return the length of the array if the value is greater than the last element', () => {
    const array = [10, 20, 30, 40, 50]
    const value = 60
    const result = baseSortedIndex(array, value)
    expect(result).toEqual(array.length)
  })

  it('should return the index at which value should be inserted into the empty array', () => {
    const array = []
    const value = 5
    const result = baseSortedIndex(array, value)
    expect(result).toEqual(0)
  })

  it('should return the index at which value should be inserted into the array of symbols', () => {
    const array = [Symbol('a'), Symbol('b'), Symbol('c')]
    const value = Symbol('d')
    const result = baseSortedIndex(array, value)
    expect(result).toEqual(3)
  })
})
