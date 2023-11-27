import baseFindIndex from './baseFindIndex'

describe('baseFindIndex', () => {
  it('should return the index of the matched value', () => {
    const array = [1, 2, 3, 4, 5]
    const predicate = (value) => value === 3
    const fromIndex = 0
    const fromRight = false

    const result = baseFindIndex(array, predicate, fromIndex, fromRight)

    expect(result).toEqual(2)
  })

  it('should return -1 if no match is found', () => {
    const array = [1, 2, 3, 4, 5]
    const predicate = (value) => value === 6
    const fromIndex = 0
    const fromRight = false

    const result = baseFindIndex(array, predicate, fromIndex, fromRight)

    expect(result).toEqual(-1)
  })

  it('should correctly iterate from the given index if fromRight is true', () => {
    const array = [1, 2, 3, 4, 5, 3]
    const predicate = (value) => value === 3
    const fromIndex = 3
    const fromRight = true

    const result = baseFindIndex(array, predicate, fromIndex, fromRight)

    expect(result).toEqual(5)
  })
})
