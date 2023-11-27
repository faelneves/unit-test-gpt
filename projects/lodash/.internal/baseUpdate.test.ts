import baseUpdate from './baseUpdate'
import baseGet from './baseGet'
import baseSet from './baseSet'

describe('baseUpdate', () => {
  it('should update a property in the object', () => {
    const object = { foo: { bar: 1 } }
    const path = 'foo.bar'
    const updater = value => value + 1
    
    const result = baseUpdate(object, path, updater)
    
    expect(result).toEqual({ foo: { bar: 2 } })
  })
  
  it('should update a property using a custom path', () => {
    const object = { foo: { bar: 1 } }
    const path = ['foo', 'bar']
    const updater = value => value + 1
    
    const result = baseUpdate(object, path, updater)
    
    expect(result).toEqual({ foo: { bar: 2 } })
  })
  
  it('should use a customizer for path creation', () => {
    const object = { foo: {} }
    const path = 'foo.bar'
    const updater = value => value + 1
    const customizer = () => ({})
    
    const result = baseUpdate(object, path, updater, customizer)
    
    expect(result).toEqual({ foo: { bar: 1 } })
  })
})
