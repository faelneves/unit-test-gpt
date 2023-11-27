// Unit tests for assocIndexOf

import assocIndexOf from './assocIndexOf'
import eq from '../eq'

describe('assocIndexOf', () => {
  it('should return the index of the matched value', () => {
    const array = [[1, 'a'], [2, 'b'], [3, 'c']]
    const key = 2
    const expected = 1
    expect(assocIndexOf(array, key)).toEqual(expected)
  })

  it('should return -1 if the key is not found in the array', () => {
    const array = [[1, 'a'], [2, 'b'], [3, 'c']]
    const key = 4
    const expected = -1
    expect(assocIndexOf(array, key)).toEqual(expected)
  })

  it('should use strict equality comparison with eq function', () => {
    const array = [[1, 'a'], ['2', 'b'], [3, 'c']]
    const key = 2
    const expected = -1
    expect(assocIndexOf(array, key)).toEqual(expected)
  })
})
