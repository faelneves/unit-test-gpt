import parent from './parent'

describe('parent', () => {
  it('should return the parent value of a nested object', () => {
    const object = {
      foo: {
        bar: {
          baz: 'value'
        }
      }
    }
    const path = ['foo', 'bar', 'baz']
    
    const result = parent(object, path)
    
    expect(result).toEqual({
      bar: {
        baz: 'value'
      }
    })
  })
  
  it('should return the object itself if path length is less than 2', () => {
    const object = {
      foo: 'value'
    }
    const path = ['foo']
    
    const result = parent(object, path)
    
    expect(result).toEqual({
      foo: 'value'
    })
  })
})
