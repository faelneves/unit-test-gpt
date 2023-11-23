import arrayReduce from './arrayReduce'

describe('arrayReduce', () => {
  it('should reduce an array with an iteratee function and an initial accumulator', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = (accumulator, currentValue) => accumulator + currentValue
    const initialAccumulator = 0

    const result = arrayReduce(array, iteratee, initialAccumulator)

    expect(result).toEqual(15)
  })

  it('should reduce an array with an iteratee function and use the first element as the initial accumulator', () => {
    const array = [1, 2, 3, 4, 5]
    const iteratee = (accumulator, currentValue) => accumulator + currentValue

    const result = arrayReduce(array, iteratee, undefined, true)

    expect(result).toEqual(15)
  })

  it('should return the accumulator if the array is empty', () => {
    const array = []
    const iteratee = (accumulator, currentValue) => accumulator + currentValue
    const initialAccumulator = 0

    const result = arrayReduce(array, iteratee, initialAccumulator)

    expect(result).toEqual(0)
  })
})
