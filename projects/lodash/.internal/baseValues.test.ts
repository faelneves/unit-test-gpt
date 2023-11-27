import baseValues from './baseValues'

describe('baseValues', () => {
  it('should return an empty array if props is null', () => {
    expect(baseValues({}, null)).toEqual([])
  })

  it('should return an array of property values', () => {
    expect(baseValues({ a: 1, b: 2, c: 3 }, ['a', 'b', 'c'])).toEqual([1, 2, 3])
  })

  it('should return an empty array if no properties match', () => {
    expect(baseValues({ a: 1, b: 2, c: 3 }, ['d', 'e', 'f'])).toEqual([])
  })
})
