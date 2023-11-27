import baseInRange from './baseInRange'

describe('baseInRange', () => {
  it('should return true if number is in the range', () => {
    expect(baseInRange(5, 0, 10)).toBe(true)
  })

  it('should return false if number is outside the range', () => {
    expect(baseInRange(15, 0, 10)).toBe(false)
    expect(baseInRange(-5, 0, 10)).toBe(false)
  })

  it('should return true if number is equal to the start or end of the range', () => {
    expect(baseInRange(0, 0, 10)).toBe(true)
    expect(baseInRange(10, 0, 10)).toBe(true)
  })

  it('should return true if start and end are swapped and number is in the range', () => {
    expect(baseInRange(5, 10, 0)).toBe(true)
  })

  it('should return false if start and end are swapped and number is outside the range', () => {
    expect(baseInRange(15, 10, 0)).toBe(false)
    expect(baseInRange(-5, 10, 0)).toBe(false)
  })

  it('should return true if number is NaN and start is less than end', () => {
    expect(baseInRange(NaN, 0, 10)).toBe(true)
  })

  it('should return false if number is NaN and start is greater than end', () => {
    expect(baseInRange(NaN, 10, 0)).toBe(false)
  })
})
