import baseMerge from './baseMerge'
import assignMergeValue from './assignMergeValue'
import baseFor from './baseFor'
import baseMergeDeep from './baseMergeDeep'
import Stack from './Stack'
import isObject from '../isObject'
import keysIn from '../keysIn'

describe('baseMerge', () => {
  it('should merge the source object into the destination object', () => {
    const object = { a: 1 }
    const source = { b: 2 }
    baseMerge(object, source)
    expect(object).toEqual({ a: 1, b: 2 })
  })

  it('should merge nested objects', () => {
    const object = { a: { b: 1 } }
    const source = { a: { c: 2 } }
    baseMerge(object, source)
    expect(object).toEqual({ a: { b: 1, c: 2 } })
  })

  it('should handle customizer function', () => {
    const object = { a: 1 }
    const source = { a: 2 }
    const customizer = (objValue, srcValue) => objValue * srcValue
    baseMerge(object, source, 0, customizer)
    expect(object).toEqual({ a: 2 })
  })

  it('should handle circular references', () => {
    const object = { a: {} }
    const source = { b: {} }
    object.a.b = source.b
    source.b.a = object.a
    baseMerge(object, source)
    expect(object).toEqual({ a: { b: {} }, b: { a: {} } })
  })
})
