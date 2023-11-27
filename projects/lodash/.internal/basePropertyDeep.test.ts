import basePropertyDeep from './basePropertyDeep'
import baseGet from './baseGet'

describe('basePropertyDeep', () => {
  it('should return a function', () => {
    const result = basePropertyDeep('address.city')
    expect(typeof result).toBe('function')
  })

  it('should return the value deep in the object', () => {
    const obj = {
      address: {
        city: 'New York',
        street: 'Broadway',
      },
    }

    const accessor = basePropertyDeep('address.city')
    expect(accessor(obj)).toBe('New York')
  })

  it('should return undefined if the property does not exist', () => {
    const obj = {
      address: {
        city: 'New York',
        street: 'Broadway',
      },
    }

    const accessor = basePropertyDeep('address.postalCode')
    expect(accessor(obj)).toBeUndefined()
  })

  it('should handle array paths', () => {
    const obj = {
      contacts: [
        { name: 'John', phone: '123-456-7890' },
        { name: 'Jane', phone: '987-654-3210' },
      ],
    }

    const accessor = basePropertyDeep('contacts[1].phone')
    expect(accessor(obj)).toBe('987-654-3210')
  })
})
