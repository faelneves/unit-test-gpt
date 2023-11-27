import isKey from './isKey'

describe('isKey', () => {
  it('should return true for string values', () => {
    expect(isKey('')).toBe(true)
    expect(isKey('foo')).toBe(true)
    expect(isKey('123')).toBe(true)
    expect(isKey('true')).toBe(true)
  })

  it('should return true for number values', () => {
    expect(isKey(0)).toBe(true)
    expect(isKey(123)).toBe(true)
  })

  it('should return true for boolean values', () => {
    expect(isKey(true)).toBe(true)
    expect(isKey(false)).toBe(true)
  })

  it('should return true for null values', () => {
    expect(isKey(null)).toBe(true)
  })

  it('should return true for undefined values', () => {
    expect(isKey(undefined)).toBe(true)
  })

  it('should return true for symbols', () => {
    expect(isKey(Symbol())).toBe(true)
    expect(isKey(Symbol('foo'))).toBe(true)
  })

  it('should return false for arrays', () => {
    expect(isKey([])).toBe(false)
    expect(isKey([1, 2, 3])).toBe(false)
  })

  it('should return false for complex object paths', () => {
    expect(isKey('foo.bar')).toBe(false)
    expect(isKey('foo[0].bar')).toBe(false)
  })

})
