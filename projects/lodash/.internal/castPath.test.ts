import castPath from './castPath'

describe('castPath', () => {
  it('should return the input array if value is already an array', () => {
    const value = [1, 2, 3]
    expect(castPath(value)).toBe(value)
  })

  it('should return an array with the input value if value is a valid key', () => {
    const value = 'key'
    const object = { key: 'value' }
    expect(castPath(value, object)).toEqual([value])
  })

  it('should return an array with the path of the input string value', () => {
    const value = 'object.property.key'
    expect(castPath(value)).toEqual(['object', 'property', 'key'])
  })
})
