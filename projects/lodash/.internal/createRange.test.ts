import createRange from './createRange'

describe('createRange', () => {
  it('should return a function', () => {
    const range = createRange()
    expect(typeof range).toBe('function')
  })

  it('should return an array of numbers starting from 0', () => {
    const range = createRange()()
    expect(range).toEqual([0])
  })

  it('should return an array of numbers starting from the given start value', () => {
    const range = createRange()(2)
    expect(range).toEqual([2])
  })

  it('should return an array of numbers in the range from start to end', () => {
    const range = createRange()(1, 5)
    expect(range).toEqual([1, 2, 3, 4, 5])
  })

  it('should return an array of numbers in the reverse range from end to start when fromRight is true', () => {
    const range = createRange(true)(1, 5)
    expect(range).toEqual([5, 4, 3, 2, 1])
  })

  it('should return an empty array when start is greater than end', () => {
    const range = createRange()(5, 1)
    expect(range).toEqual([])
  })

  it('should return an array of numbers with the given step size', () => {
    const range = createRange()(1, 10, 2)
    expect(range).toEqual([1, 3, 5, 7, 9])
  })

  it('should return an array of numbers with the negative step size when start is greater than end', () => {
    const range = createRange()(10, 1, 2)
    expect(range).toEqual([10, 8, 6, 4, 2])
  })

  it('should return an array with a single element when step is 0', () => {
    const range = createRange()(0, 10, 0)
    expect(range).toEqual([0])
  })
})
