import baseAt from './baseAt'
import get from '../get'

describe('baseAt', () => {
  it('should return an array of picked elements', () => {
    const obj = { a: { b: 1 }, c: { d: 2 } }
    const paths = ['a.b', 'c.d']
    const result = baseAt(obj, paths)

    expect(result).toEqual([1, 2])
  })

  it('should return an array of undefined if object is null or undefined', () => {
    const obj = null
    const paths = ['a.b', 'c.d']
    const result = baseAt(obj, paths)

    expect(result).toEqual([undefined, undefined])
  })

  it('should return an array of undefined if object is missing paths', () => {
    const obj = { a: { b: 1 } }
    const paths = ['a.b', 'c.d']
    const result = baseAt(obj, paths)

    expect(result).toEqual([1, undefined])
  })

  it('should handle edge cases with empty paths', () => {
    const obj = { a: { b: 1 }, c: { d: 2 } }
    const paths = []
    const result = baseAt(obj, paths)

    expect(result).toEqual([])
  })

  it('should return an array of undefined if object is an empty object', () => {
    const obj = {}
    const paths = ['a.b', 'c.d']
    const result = baseAt(obj, paths)

    expect(result).toEqual([undefined, undefined])
  })

  it('should return an array of undefined if object is an empty array', () => {
    const obj = []
    const paths = ['0', '1']
    const result = baseAt(obj, paths)

    expect(result).toEqual([undefined, undefined])
  })
})
