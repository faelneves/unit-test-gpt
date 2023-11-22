import arrayIncludes from './arrayIncludes'
import baseIndexOf from './baseIndexOf'

describe('arrayIncludes', () => {
  it('should return true if the array includes the target value', () => {
    const array = [1, 2, 3, 4, 5]
    const target = 3
    const result = arrayIncludes(array, target)
    expect(result).toBe(true)
  })

  it('should return false if the array does not include the target value', () => {
    const array = [1, 2, 3, 4, 5]
    const target = 6
    const result = arrayIncludes(array, target)
    expect(result).toBe(false)
  })

  it('should return false if the array is empty', () => {
    const array = []
    const target = 1
    const result = arrayIncludes(array, target)
    expect(result).toBe(false)
  })

  it('should return true if the array includes the target value multiple times', () => {
    const array = [1, 2, 3, 2, 4, 5]
    const target = 2
    const result = arrayIncludes(array, target)
    expect(result).toBe(true)
  })

  it('should return true if the array includes the target value at the end', () => {
    const array = [1, 2, 3, 3, 4, 5]
    const target = 5
    const result = arrayIncludes(array, target)
    expect(result).toBe(true)
  })

  it('should return true if the array includes the target value at the beginning', () => {
    const array = [1, 1, 2, 3, 4, 5]
    const target = 1
    const result = arrayIncludes(array, target)
    expect(result).toBe(true)
  })

  it('should return true if the target value is null and the array includes null', () => {
    const array = [null, 1, 2, 3, 4, 5]
    const target = null
    const result = arrayIncludes(array, target)
    expect(result).toBe(true)
  })

  // Edge Cases

  it('should return false if the array is undefined', () => {
    const array = undefined
    const target = 1
    const result = arrayIncludes(array, target)
    expect(result).toBe(false)
  })

  it('should return false if the target value is undefined and the array does not include undefined', () => {
    const array = [1, 2, 3, 4, 5]
    const target = undefined
    const result = arrayIncludes(array, target)
    expect(result).toBe(false)
  })

  it('should return false if the target value is null and the array does not include null', () => {
    const array = [1, 2, 3, 4, 5]
    const target = null
    const result = arrayIncludes(array, target)
    expect(result).toBe(false)
  })
})
