import castPath from './castPath'
import baseGet from './baseGet'
import baseSet from './baseSet'

describe('basePickBy', () => {
  it('should pick properties from object based on the given predicate', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths = ['a', 'b']
    const predicate = (value: any) => value > 1

    const result = basePickBy(object, paths, predicate)

    expect(result).toEqual({ b: 2 })
  })

  it('should pick properties from object with nested paths based on the given predicate', () => {
    const object = { a: { b: { c: 1 } }, d: { e: { f: 2 } }, g: { h: { i: 3 } } }
    const paths = ['a.b.c', 'd.e.f', 'g.h.i']
    const predicate = (value: any) => value > 1

    const result = basePickBy(object, paths, predicate)

    expect(result).toEqual({ d: { e: { f: 2 } }, g: { h: { i: 3 } } })
  })

  it('should return an empty object if no properties satisfy the predicate', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths = ['a', 'b', 'c']
    const predicate = (value: any) => value > 10

    const result = basePickBy(object, paths, predicate)

    expect(result).toEqual({})
  })

  it('should return an empty object if no paths are provided', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths: string[] = []
    const predicate = (value: any) => value > 1

    const result = basePickBy(object, paths, predicate)

    expect(result).toEqual({})
  })

  it('should handle paths with classNames correctly', () => {
    const object = { 'btn--primary': 1, 'btn--secondary': 2, 'btn--disabled': 3 }
    const paths = ['btn--primary', 'btn--disabled']
    const predicate = (value: any) => value > 1

    const result = basePickBy(object, paths, predicate)

    expect(result).toEqual({ 'btn--disabled': 3 })
  })
})
