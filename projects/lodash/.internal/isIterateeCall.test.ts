import isIterateeCall from './isIterateeCall'
import isArrayLike from '../isArrayLike'
import isIndex from './isIndex'
import isObject from '../isObject'
import eq from '../eq'

describe('isIterateeCall', () => {
  it('should return true if arguments are from an iteratee call', () => {
    const object = { a: 1, b: 2 }
    const result = isIterateeCall(2, 'b', object)
    expect(result).toBe(true)
  })

  it('should return false if arguments are not from an iteratee call', () => {
    const object = { a: 1, b: 2 }
    const result = isIterateeCall(3, 'b', object)
    expect(result).toBe(false)
  })

  it('should return false if object is not an object', () => {
    const result = isIterateeCall(2, 'b', 'test')
    expect(result).toBe(false)
  })

  it('should return false if index is not a number or string', () => {
    const object = { a: 1, b: 2 }
    const result = isIterateeCall(2, true, object)
    expect(result).toBe(false)
  })

  it('should return false if index is a number but not a valid index for the object', () => {
    const object = ['a', 'b']
    const result = isIterateeCall(2, 2, object)
    expect(result).toBe(false)
  })

  it('should return false if index is a string but not a valid key for the object', () => {
    const object = { a: 1, b: 2 }
    const result = isIterateeCall(2, 'c', object)
    expect(result).toBe(false)
  })
})
