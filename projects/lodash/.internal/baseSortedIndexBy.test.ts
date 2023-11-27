import baseSortedIndexBy from './baseSortedIndexBy'
import isSymbol from '../isSymbol'

describe('baseSortedIndexBy', () => {
  const array = [1, 2, 3, 4, 5]

  it('should return the index at which the value should be inserted into the array', () => {
    const value = 3
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee)

    expect(result).toBe(2)
  })

  it('should return 0 if the array is empty', () => {
    const emptyArray = []
    const value = 3
    const iteratee = (num) => num

    const result = baseSortedIndexBy(emptyArray, value, iteratee)

    expect(result).toBe(0)
  })

  it('should return the highest qualified index if specified', () => {
    const value = 3
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee, true)

    expect(result).toBe(3)
  })

  it('should correctly handle NaN values', () => {
    const array = [NaN, 1, 2, 3, 4]
    const value = NaN
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee)

    expect(result).toBe(0)
  })

  it('should correctly handle undefined values', () => {
    const array = [undefined, 1, 2, 3, 4]
    const value = undefined
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee)

    expect(result).toBe(0)
  })

  it('should correctly handle null values', () => {
    const array = [null, 1, 2, 3, 4]
    const value = null
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee)

    expect(result).toBe(0)
  })

  it('should correctly handle symbol values', () => {
    const array = [Symbol(), 1, 2, 3, 4]
    const value = Symbol()
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee)

    expect(result).toBe(0)
  })

  it('should correctly handle null or symbol values in the array', () => {
    const array = [Symbol(), null, 2, 3, 4]
    const value = Symbol()
    const iteratee = (num) => num

    const result = baseSortedIndexBy(array, value, iteratee)

    expect(result).toBe(1)
  })

})
