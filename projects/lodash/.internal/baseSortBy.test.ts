import baseSortBy from './baseSortBy'

describe('baseSortBy', () => {
  it('should sort the array based on the comparer', () => {
    const array = [{ value: 3 }, { value: 1 }, { value: 2 }]
    const comparer = (a, b) => a.value - b.value

    const result = baseSortBy(array, comparer)

    expect(result).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }])
  })
})
