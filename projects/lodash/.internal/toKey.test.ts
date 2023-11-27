import toKey from './toKey.js'

describe('toKey', () => {
  it('should return string key if value is a string', () => {
    const value = 'test'
    expect(toKey(value)).toBe(value)
  })

  it('should return string key if value is a symbol', () => {
    const value = Symbol('test')
    expect(toKey(value)).toBe(value)
  })

  it('should convert value to string key if value is not a string or symbol', () => {
    const value = 123
    expect(toKey(value)).toBe('123')
  })

  it('should return "-0" if value is -0', () => {
    const value = -0
    expect(toKey(value)).toBe('-0')
  })

  it('should return string key if value is NaN', () => {
    const value = NaN
    expect(toKey(value)).toBe('NaN')
  })
})
