import getSymbols from './getSymbols'

describe('getSymbols', () => {
  it('should return an empty array for a null object', () => {
    const object = null
    expect(getSymbols(object)).toEqual([])
  })

  it('should return an array of symbols for an object with symbols', () => {
    const object = {
      [Symbol('symbol1')]: 'value1',
      [Symbol('symbol2')]: 'value2',
    }
    const symbols = getSymbols(object)
    expect(symbols).toContainEqual(Symbol('symbol1'))
    expect(symbols).toContainEqual(Symbol('symbol2'))
  })

  it('should not include symbols that are not enumerable', () => {
    const object = {}
    const symbol1 = Symbol('symbol1')
    const symbol2 = Symbol('symbol2')

    Object.defineProperty(object, symbol1, {
      enumerable: false,
      value: 'value1',
    })

    Object.defineProperty(object, symbol2, {
      enumerable: true,
      value: 'value2',
    })

    const symbols = getSymbols(object)
    expect(symbols).toEqual([symbol2])
  })
})
