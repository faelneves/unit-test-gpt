import isPrototype from './isPrototype'

describe('isPrototype', () => {
  it('should return true if value is a prototype', () => {
    function Sample() {}
    expect(isPrototype(Sample.prototype)).toBe(true)
  })

  it('should return false if value is not a prototype', () => {
    function Sample() {}
    const obj = new Sample()
    expect(isPrototype(obj)).toBe(false)

    expect(isPrototype(null)).toBe(false)
    expect(isPrototype(undefined)).toBe(false)
    expect(isPrototype(123)).toBe(false)
    expect(isPrototype('string')).toBe(false)
    expect(isPrototype(true)).toBe(false)
    expect(isPrototype([])).toBe(false)
    expect(isPrototype({})).toBe(false)
  })
})
