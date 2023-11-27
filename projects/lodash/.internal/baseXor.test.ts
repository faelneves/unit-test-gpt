import baseXor from './baseXor'
import baseDifference from './baseDifference'
import baseFlatten from './baseFlatten'
import baseUniq from './baseUniq'

describe('baseXor', () => {
  it('should return an empty array if no arrays are provided', () => {
    const result = baseXor([])
    expect(result).toEqual([])
  })

  it('should return the unique values from the arrays', () => {
    const arrays = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5]
    ]
    const result = baseXor(arrays)

    expect(result).toEqual([1, 5])
  })

  it('should apply the iteratee function if provided', () => {
    const arrays = [
      ['apple', 'banana', 'orange'],
      ['banana', 'orange', 'kiwi'],
      ['orange', 'kiwi', 'pineapple']
    ]
    const iteratee = (value) => value.length
    const result = baseXor(arrays, iteratee)

    expect(result).toEqual(['apple', 'kiwi'])
  })

  it('should apply the comparator function if provided', () => {
    const arrays = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5]
    ]
    const comparator = (a, b) => a === b
    const result = baseXor(arrays, undefined, comparator)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should work correctly with a single array', () => {
    const arrays = [
      [1, 2, 3]
    ]
    const result = baseXor(arrays)

    expect(result).toEqual([1, 2, 3])
  })
})
