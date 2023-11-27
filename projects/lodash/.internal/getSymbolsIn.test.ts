import getSymbolsIn from './getSymbolsIn'
import getSymbols from './getSymbols'

describe('getSymbolsIn', () => {
  it('should return an array of symbols from the given object and its prototypes', () => {
    const symbol1 = Symbol('symbol1')
    const symbol2 = Symbol('symbol2')
    const symbol3 = Symbol('symbol3')
    const obj1 = {
      [symbol1]: 'value1'
    }
    const obj2 = Object.create(obj1)
    obj2[symbol2] = 'value2'
    const obj3 = Object.create(obj2)
    obj3[symbol3] = 'value3'
  
    const result = getSymbolsIn(obj3)
  
    expect(result).toContain(symbol1)
    expect(result).toContain(symbol2)
    expect(result).toContain(symbol3)
  })
  
  it('should exclude symbols from non-enumerable properties', () => {
    const symbol1 = Symbol('symbol1')
    const obj = {}
    Object.defineProperty(obj, symbol1, {
      value: 'value1',
      enumerable: false
    })
  
    const result = getSymbolsIn(obj)
  
    expect(result).not.toContain(symbol1)
  })
  
  it('should return an empty array if the object has no symbols', () => {
    const obj = {}
  
    const result = getSymbolsIn(obj)
  
    expect(result).toEqual([])
  })
})
