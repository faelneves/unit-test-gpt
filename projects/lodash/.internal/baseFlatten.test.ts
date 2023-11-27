import baseFlatten from './baseFlatten'
import isFlattenable from './isFlattenable'

describe('baseFlatten', () => {
  it('should return an empty array if input array is null', () => {
    expect(baseFlatten(null)).toEqual([])
  })

  it('should return the original array if depth is 0', () => {
    const array = [1, 2, 3]
    expect(baseFlatten(array, 0)).toEqual(array)
  })

  it('should flatten the array with a depth of 1', () => {
    const array = [[1, 2], [3, 4]]
    expect(baseFlatten(array, 1)).toEqual([1, 2, 3, 4])
  })

  it('should flatten the array with a depth of 2', () => {
    const array = [[[1, 2], [3]], [4]]
    expect(baseFlatten(array, 2)).toEqual([1, 2, 3, 4])
  })

  it('should apply the predicate function for flattening', () => {
    const array = [[1, 2], [3, [4]]]
    const predicate = (value) => Array.isArray(value)
    expect(baseFlatten(array, Infinity, predicate)).toEqual([1, 2, 3, [4]])
  })

  it('should apply the predicate function and be strict', () => {
    const array = [[1, 2], [3, [4]]]
    const predicate = (value) => Array.isArray(value)
    expect(baseFlatten(array, Infinity, predicate, true)).toEqual([[1, 2], [3, [4]]])
  })
})
