import arrayLikeKeys from './arrayLikeKeys'

describe('arrayLikeKeys', () => {
  it('should return an array of property names for array-like value', () => {
    const value = [1, 2, 3]
    const result = arrayLikeKeys(value)
    expect(result).toEqual(['0', '1', '2'])
  })

  it('should return an array of property names for array-like value with inherited properties', () => {
    const value = [1, 2, 3]
    const result = arrayLikeKeys(value, true)
    expect(result).toEqual(['0', '1', '2', 'length'])
  })

  it('should return an empty array for non-array-like value', () => {
    const value = { 0: 'a', 1: 'b', 2: 'c' }
    const result = arrayLikeKeys(value)
    expect(result).toEqual([])
  })

  it('should return an array of property names for array-like value with indexes skipped', () => {
    const value = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
    const result = arrayLikeKeys(value)
    expect(result).toEqual(['length'])
  })

  it('should return an array of property names for array-like value with indexes skipped and inherited properties', () => {
    const value = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
    const result = arrayLikeKeys(value, true)
    expect(result).toEqual(['length'])
  })
})
