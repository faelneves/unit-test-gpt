import baseToNumber from './baseToNumber'

describe('baseToNumber', () => {
  it('should return the number if value is already a number', () => {
    expect(baseToNumber(42)).toBe(42)
    expect(baseToNumber(-10)).toBe(-10)
    expect(baseToNumber(0)).toBe(0)
    expect(baseToNumber(3.14)).toBe(3.14)
  })

  it('should return NaN if value is a symbol', () => {
    expect(baseToNumber(Symbol())).toBeNaN()
    expect(baseToNumber(Symbol('foo'))).toBeNaN()
  })

  it('should convert string values to number', () => {
    expect(baseToNumber('42')).toBe(42)
    expect(baseToNumber('-10')).toBe(-10)
    expect(baseToNumber('0')).toBe(0)
    expect(baseToNumber('3.14')).toBe(3.14)
    expect(baseToNumber('foo')).toBeNaN()
  })
})
