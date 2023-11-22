import arrayReduceRight from './arrayReduceRight'

describe('arrayReduceRight', () => {
  it('should correctly reduce an array from right to left with initial value', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = (accumulator, current) => accumulator + current
    const initialValue = 10
    const result = arrayReduceRight(array, iteratee, initialValue)

    expect(result).toEqual(25)
  })

  it('should correctly reduce an array from right to left without initial value', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = (accumulator, current) => accumulator + current
    const result = arrayReduceRight(array, iteratee)

    expect(result).toEqual(15)
  })

  it('should correctly reduce an empty array without initial value', () => {
    const array = []
    const iteratee = (accumulator, current) => accumulator + current
    const result = arrayReduceRight(array, iteratee)

    expect(result).toEqual(undefined) // Expected result to be undefined since the array is empty
  })

  it('should return the last element as the initial value if specified', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = (accumulator, current) => accumulator + current
    const result = arrayReduceRight(array, iteratee, null, true)

    expect(result).toEqual(5)
  })
})
