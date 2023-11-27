import setToArray from './setToArray'

describe('setToArray', () => {
  it('should convert a set to an array of its values', () => {
    const set = new Set([1, 2, 3])
    const result = setToArray(set)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return an empty array if the set is empty', () => {
    const set = new Set()
    const result = setToArray(set)
    expect(result).toEqual([])
  })

  it('should handle sets with duplicate values', () => {
    const set = new Set([1, 2, 2, 3, 3, 3])
    const result = setToArray(set)
    expect(result).toEqual([1, 2, 2, 3, 3, 3])
  })
})
