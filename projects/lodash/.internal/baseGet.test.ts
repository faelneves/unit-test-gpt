import baseGet from './baseGet'

describe('baseGet', () => {
  it('should return the resolved value when the path exists', () => {
    const object = {
      a: {
        b: {
          c: 'value'
        }
      }
    }
    const path = ['a', 'b', 'c']
    const result = baseGet(object, path)
    expect(result).toBe('value')
  })

  it('should return undefined when the path does not exist', () => {
    const object = {
      a: {
        b: {
          c: 'value'
        }
      }
    }
    const path = ['a', 'b', 'd']
    const result = baseGet(object, path)
    expect(result).toBeUndefined()
  })

  it('should return undefined when the object is null or undefined', () => {
    const object = null
    const path = ['a']
    const result = baseGet(object, path)
    expect(result).toBeUndefined()
  })

  it('should return undefined when the path is an empty array', () => {
    const object = {
      a: {
        b: {
          c: 'value'
        }
      }
    }
    const path = []
    const result = baseGet(object, path)
    expect(result).toBeUndefined()
  })
})
