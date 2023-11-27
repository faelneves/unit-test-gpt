import getAllKeysIn from './getAllKeysIn'
import getSymbolsIn from './getSymbolsIn'

describe('getAllKeysIn', () => {
  it('should return an array of own and inherited enumerable property names and symbols of an object', () => {
    const obj = {
      a: 1,
      b: 2,
      [Symbol('c')]: 3,
    }
    const result = getAllKeysIn(obj)
    expect(result).toEqual(['a', 'b', expect.any(Symbol)])
  })

  it('should return an empty array if the object is empty', () => {
    const obj = {}
    const result = getAllKeysIn(obj)
    expect(result).toEqual([])
  })

  it('should include inherited enumerable property names and symbols', () => {
    function Parent() {
      this.a = 1
    }
    Parent.prototype.b = 2
    Parent.prototype[Symbol('c')] = 3

    const child = new Parent()
    const result = getAllKeysIn(child)
    expect(result).toEqual(['a', 'b', expect.any(Symbol)])
  })

  it('should include inherited enumerable property names and symbols from multiple levels of inheritance', () => {
    function GrandParent() {
      this.d = 1
    }
    GrandParent.prototype.e = 2
    GrandParent.prototype[Symbol('f')] = 3

    function Parent() {
      this.a = 1
    }
    Parent.prototype.b = 2
    Parent.prototype[Symbol('c')] = 3
    Parent.prototype = Object.create(GrandParent.prototype)

    const child = new Parent()

    const result = getAllKeysIn(child)
    expect(result).toEqual(['a', 'b', 'd', 'e', expect.any(Symbol)])
  })

  it('should include only enumerable property names and symbols from the object itself', () => {
    const obj = Object.create(
      {
        a: 1,
        [Symbol('b')]: 2,
      },
      {
        c: {
          enumerable: false,
          value: 3,
        },
        [Symbol('d')]: {
          enumerable: true,
          value: 4,
        },
      }
    )

    const result = getAllKeysIn(obj)
    expect(result).toEqual(['c', expect.any(Symbol), expect.any(Symbol)])
  })
})
