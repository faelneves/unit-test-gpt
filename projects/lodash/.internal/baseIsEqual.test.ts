import baseIsEqual from './baseIsEqual'
import baseIsEqualDeep from './baseIsEqualDeep'
import isObjectLike from '../isObjectLike'

describe('baseIsEqual', () => {
  it('should return true if the values are equal', () => {
    const value = { name: 'John', age: 25 }
    const other = { name: 'John', age: 25 }
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(true)
  })

  it('should return false if the values are not equal', () => {
    const value = [1, 2, 3]
    const other = [1, 2, 4]
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(false)
  })

  it('should return true if the values are both null or undefined', () => {
    const value = null
    const other = null
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(true)
  })

  it('should return true if the values are both NaN', () => {
    const value = NaN
    const other = NaN
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(true)
  })

  it('should return false if one value is NaN and the other is not NaN', () => {
    const value = NaN
    const other = 5
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(false)
  })

  it('should return true if the values are both objects and have the same properties', () => {
    const value = { name: 'John', age: 25 }
    const other = { name: 'John', age: 25 }
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(true)
  })

  it('should return false if the values are both objects but have different properties', () => {
    const value = { name: 'John', age: 25 }
    const other = { name: 'John', gender: 'Male' }
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(false)
  })

  it('should return true if the values are both arrays and have the same elements', () => {
    const value = [1, 2, 3]
    const other = [1, 2, 3]
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(true)
  })

  it('should return false if the values are both arrays but have different elements', () => {
    const value = [1, 2, 3]
    const other = [1, 2, 4]
    const result = baseIsEqual(value, other, 0, undefined, {})
    expect(result).toBe(false)
  })
})
