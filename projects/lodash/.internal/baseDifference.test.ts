import SetCache from './SetCache'
import arrayIncludes from './arrayIncludes'
import arrayIncludesWith from './arrayIncludesWith'
import map from '../map'
import cacheHas from './cacheHas'

import baseDifference from './baseDifference'

describe('baseDifference', () => {
  it('should return a new array with filtered values', () => {
    const array = [1, 2, 3, 4, 5]
    const values = [2, 4, 6]
    const result = baseDifference(array, values)
    expect(result).toEqual([1, 3, 5])
  })

  it('should handle empty array', () => {
    const array = []
    const values = [2, 4, 6]
    const result = baseDifference(array, values)
    expect(result).toEqual([])
  })

  it('should handle empty values array', () => {
    const array = [1, 2, 3, 4, 5]
    const values = []
    const result = baseDifference(array, values)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should apply iteratee function on values', () => {
    const array = [1, 2, 3, 4, 5]
    const values = ['2', '4', '6']
    const iteratee = (value) => value.toString()
    const result = baseDifference(array, values, iteratee)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should apply comparator function on values', () => {
    const array = [1, 2, 3, 4, 5]
    const values = [2, 4, 6]
    const comparator = (a, b) => a === b
    const result = baseDifference(array, values, null, comparator)
    expect(result).toEqual([1, 3, 5])
  })

  it('should handle large size values array using SetCache', () => {
    const array = [1, 2, 3, 4, 5]
    const values = [2, 4, 6, ...Array.from({ length: 200 }, (_, index) => index + 1)]
    const result = baseDifference(array, values)
    expect(result).toEqual([1, 3, 5])
  })
})
