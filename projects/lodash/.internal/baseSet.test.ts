import baseSet from './baseSet'

describe('baseSet', () => {
  let object

  beforeEach(() => {
    object = {
      foo: {
        bar: {
          baz: 'oldValue'
        }
      }
    }
  })

  it('should set a value at a shallow path', () => {
    const result = baseSet(object, 'foo', 'newValue')
    expect(result.foo).toBe('newValue')
  })

  it('should set a value at a deep path', () => {
    const result = baseSet(object, 'foo.bar.baz', 'newValue')
    expect(result.foo.bar.baz).toBe('newValue')
  })

  it('should create missing intermediate objects', () => {
    const result = baseSet(object, 'foo.bar.qux', 'newValue')
    expect(result.foo.bar.qux).toBe('newValue')
  })

  it('should replace arrays with new objects when necessary', () => {
    const result = baseSet(object, 'foo.bar', 'newValue')
    expect(result.foo.bar).toBe('newValue')
    expect(Array.isArray(result.foo.bar)).toBe(false)
  })

  it('should call the customizer function when provided', () => {
    const customizer = jest.fn()
    baseSet(object, 'foo.bar.baz', 'newValue', customizer)

    expect(customizer).toHaveBeenCalledTimes(1)
    expect(customizer).toHaveBeenCalledWith('oldValue', 'baz', object.foo.bar)
  })

  it('should return the modified object', () => {
    const result = baseSet(object, 'foo.bar.baz', 'newValue')
    expect(result).toBe(object)
  })

  it('should not modify the object if it is not an object', () => {
    const result = baseSet(null, 'foo.bar.baz', 'newValue')
    expect(result).toBe(null)
  })
})
