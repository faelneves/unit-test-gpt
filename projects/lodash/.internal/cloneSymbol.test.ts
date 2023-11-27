import cloneSymbol from './cloneSymbol'

describe('cloneSymbol', () => {
  it('should return a clone of the symbol object', () => {
    const symbol = Symbol('test')
    const clonedSymbol = cloneSymbol(symbol)

    expect(clonedSymbol).toBe(symbol)
  })

  it('should return a new symbol object when given an existing symbol object', () => {
    const symbol = Symbol('test')
    const clonedSymbol = cloneSymbol(symbol)

    expect(clonedSymbol).not.toBe(symbol)
  })
})
