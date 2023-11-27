import copySymbols from './copySymbols'
import copyObject from './copyObject'
import getSymbols from './getSymbols'

describe('copySymbols', () => {
  it('should copy own symbols from source to object', () => {
    const source = {
      [Symbol('symbol1')]: 1,
      [Symbol('symbol2')]: 2,
    }
    const object = {}
    
    copySymbols(source, object)

    const sourceSymbols = getSymbols(source)
    const objectSymbols = getSymbols(object)

    expect(sourceSymbols).toEqual(objectSymbols)
  })

  it('should copy own symbols from source to object when object is empty', () => {
    const source = {
      [Symbol('symbol1')]: 1,
      [Symbol('symbol2')]: 2,
    }
    const object = {}
    
    copySymbols(source, object)

    const sourceSymbols = getSymbols(source)
    const objectSymbols = getSymbols(object)

    expect(sourceSymbols).toEqual(objectSymbols)
  })

  it('should not copy own symbols from source to object when source is empty', () => {
    const source = {}
    const object = {}
    
    copySymbols(source, object)

    const sourceSymbols = getSymbols(source)
    const objectSymbols = getSymbols(object)

    expect(objectSymbols).toHaveLength(0)
  })

  it('should copy own symbols from source to object when source has duplicate symbols', () => {
    const symbol1 = Symbol('symbol1')
    const source = {
      [symbol1]: 1,
      [symbol1]: 2,
    }
    const object = {}
    
    copySymbols(source, object)

    const sourceSymbols = getSymbols(source)
    const objectSymbols = getSymbols(object)

    expect(sourceSymbols).toEqual(objectSymbols)
  })
})
