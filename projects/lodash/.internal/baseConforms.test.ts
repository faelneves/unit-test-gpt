import baseConforms from './baseConforms'
import baseConformsTo from './baseConformsTo'
import keys from '../keys'

describe('baseConforms', () => {
  it('should return a function', () => {
    const source = { a: (value) => value > 0 }
    const result = baseConforms(source)
    expect(typeof result).toBe('function')
  })

  it('should return a function that returns true when object conforms to source', () => {
    const source = { a: (value) => value > 0, b: (value) => value < 10 }
    const object = { a: 5, b: 7 }
    const result = baseConforms(source)(object)
    expect(result).toBe(true)
  })

  it('should return a function that returns false when object does not conform to source', () => {
    const source = { a: (value) => value > 0, b: (value) => value < 10 }
    const object = { a: 5, b: 15 }
    const result = baseConforms(source)(object)
    expect(result).toBe(false)
  })

  it('should return a function that returns false when object does not have all properties required by source', () => {
    const source = { a: (value) => value > 0, b: (value) => value < 10 }
    const object = { a: 5 }
    const result = baseConforms(source)(object)
    expect(result).toBe(false)
  })
})
