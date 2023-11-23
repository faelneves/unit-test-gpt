import assignValue from './assignValue'
import baseAssignValue from './baseAssignValue'
import eq from '../eq'

describe('assignValue', () => {
  it('should assign value to key of object if the existing value is not equivalent', () => {
    const object = { key1: 'value1' }
    const key = 'key2'
    const value = 'value2'

    assignValue(object, key, value)

    expect(object[key]).toBe(value)
  })

  it('should not assign value to key of object if the existing value is equivalent', () => {
    const object = { key1: 'value1' }
    const key = 'key1'
    const value = 'value1'

    assignValue(object, key, value)

    expect(object[key]).toBe('value1')
  })

  it('should assign value to key of object if value is undefined and key is not in object', () => {
    const object = { key1: 'value1' }
    const key = 'key2'
    const value = undefined

    assignValue(object, key, value)

    expect(object[key]).toBe(undefined)
  })

  it('should not assign value to key of object if value is undefined but key is in object', () => {
    const object = { key1: 'value1' }
    const key = 'key1'
    const value = undefined

    assignValue(object, key, value)

    expect(object[key]).toBe('value1')
  })

  // Additional test cases:
  it('should assign value to key of object if value is 0 and existing value is not 0', () => {
    const object = { key1: 1 }
    const key = 'key1'
    const value = 0

    assignValue(object, key, value)

    expect(object[key]).toBe(value)
  })

  it('should not assign value to key of object if value is 0 and existing value is 0', () => {
    const object = { key1: 0 }
    const key = 'key1'
    const value = 0

    assignValue(object, key, value)

    expect(object[key]).toBe(0)
  })
})
