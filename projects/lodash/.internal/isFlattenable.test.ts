import isFlattenable from './isFlattenable'

describe('isFlattenable', () => {
  it('should return true if value is an array', () => {
    expect(isFlattenable([1, 2, 3])).toBe(true)
  })

  it('should return true if value is an arguments object', () => {
    function testFunction() {
      expect(isFlattenable(arguments)).toBe(true)
    }
    testFunction(1, 2, 3)
  })

  it('should return true if value is a spreadable object', () => {
    const obj = { [Symbol.isConcatSpreadable]: true }
    expect(isFlattenable(obj)).toBe(true)
  })

  it('should return false if value is not an array, arguments object, or spreadable object', () => {
    expect(isFlattenable(123)).toBe(false)
    expect(isFlattenable('abc')).toBe(false)
    expect(isFlattenable(null)).toBe(false)
    expect(isFlattenable(undefined)).toBe(false)
    expect(isFlattenable({})).toBe(false)
    expect(isFlattenable(() => {})).toBe(false)
  })
})
