import initCloneObject from './initCloneObject'

describe('initCloneObject', () => {
  it('should return an empty object if the object constructor is not a function', () => {
    const object = {}
    expect(initCloneObject(object)).toEqual({})
  })

  it('should return a clone of the object if the object constructor is a function and not a prototype', () => {
    const object = { a: 1 }
    const clone = initCloneObject(object)
    expect(clone).not.toBe(object)
    expect(clone).toEqual(object)
  })

  it('should return an empty object if the object constructor is a prototype', () => {
    const object = Object.create({ a: 1 })
    expect(initCloneObject(object)).toEqual({})
  })
})
