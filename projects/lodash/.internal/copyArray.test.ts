import copyArray from './copyArray'

describe('copyArray', () => {
  it('should copy values from source array to target array', () => {
    const source = [1, 2, 3]
    const target = []
    const result = copyArray(source, target)
    expect(result).toEqual([1, 2, 3])
  })

  it('should create a new array if target array is not provided', () => {
    const source = [1, 2, 3]
    const result = copyArray(source)
    expect(result).toEqual([1, 2, 3])
  })
})
