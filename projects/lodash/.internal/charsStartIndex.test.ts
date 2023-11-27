import charsStartIndex from './charsStartIndex'

describe('charsStartIndex', () => {
  it('should return the index of the first unmatched string symbol', () => {
    const strSymbols = ['a', 'b', 'c', 'd']
    const chrSymbols = ['x', 'y', 'z', 'd']

    const result = charsStartIndex(strSymbols, chrSymbols)

    expect(result).toBe(3)
  })

  it('should return 0 if all string symbols are matched', () => {
    const strSymbols = ['a', 'b', 'c', 'd']
    const chrSymbols = ['a', 'b', 'c', 'd']

    const result = charsStartIndex(strSymbols, chrSymbols)

    expect(result).toBe(0)
  })

  it('should return 0 if string symbols array is empty', () => {
    const strSymbols = []
    const chrSymbols = ['a', 'b', 'c', 'd']

    const result = charsStartIndex(strSymbols, chrSymbols)

    expect(result).toBe(0)
  })

  it('should return 0 if character symbols array is empty', () => {
    const strSymbols = ['a', 'b', 'c', 'd']
    const chrSymbols = []

    const result = charsStartIndex(strSymbols, chrSymbols)

    expect(result).toBe(0)
  })

  it('should return 0 if both the string symbols and character symbols arrays are empty', () => {
    const strSymbols = []
    const chrSymbols = []

    const result = charsStartIndex(strSymbols, chrSymbols)

    expect(result).toBe(0)
  })
})
