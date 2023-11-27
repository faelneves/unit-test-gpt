import baseZipObject from './baseZipObject'

describe('baseZipObject', () => {
  it('should return an object with properties assigned using the assignFunc', () => {
    const props = ['a', 'b', 'c']
    const values = [1, 2, 3]
    const assignFunc = (obj, prop, value) => obj[prop] = value
    
    const result = baseZipObject(props, values, assignFunc)

    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should return an object with undefined values if values array is shorter than props array', () => {
    const props = ['a', 'b', 'c']
    const values = [1, 2]
    const assignFunc = (obj, prop, value) => obj[prop] = value
    
    const result = baseZipObject(props, values, assignFunc)

    expect(result).toEqual({ a: 1, b: 2, c: undefined })
  })

  it('should return an empty object if props array is empty', () => {
    const props = []
    const values = []
    const assignFunc = (obj, prop, value) => obj[prop] = value
    
    const result = baseZipObject(props, values, assignFunc)

    expect(result).toEqual({})
  })
})
