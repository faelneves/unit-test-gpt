import basePick from './basePick'

describe('basePick', () => {
  it('should return a new object with the picked properties', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths = ['a', 'c']
    const result = basePick(object, paths)
    expect(result).toEqual({ a: 1, c: 3 })
  })

  it('should return an empty object if the input object is empty', () => {
    const object = {}
    const paths = ['a', 'b']
    const result = basePick(object, paths)
    expect(result).toEqual({})
  })

  it('should return an empty object if the input object does not contain the specified properties', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths = ['d', 'e']
    const result = basePick(object, paths)
    expect(result).toEqual({})
  })

  it('should return an object with properties that are present in the input object but not in the paths array', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths = ['a']
    const result = basePick(object, paths)
    expect(result).toEqual({ a: 1 })
  })

  it('should not modify the input object', () => {
    const object = { a: 1, b: 2, c: 3 }
    const paths = ['a', 'c']
    basePick(object, paths)
    expect(object).toEqual({ a: 1, b: 2, c: 3 })
  })
})
