import assignValue from './assignValue'
import baseAssignValue from './baseAssignValue'
import eq from '../eq'

jest.mock('./baseAssignValue')
jest.mock('../eq')

describe('assignValue', () => {
  beforeEach(() => {
    baseAssignValue.mockClear()
    eq.mockClear()
  })

  it('should assign value to key if the existing value is not equivalent', () => {
    const object = { foo: 'bar' }
    const key = 'foo'
    const value = 'baz'

    eq.mockReturnValueOnce(false)

    assignValue(object, key, value)

    expect(eq).toHaveBeenCalledTimes(1)
    expect(eq).toHaveBeenCalledWith('bar', 'baz')
    expect(baseAssignValue).toHaveBeenCalledTimes(1)
    expect(baseAssignValue).toHaveBeenCalledWith(object, key, value)
  })

  it('should not assign value to key if the existing value is equivalent', () => {
    const object = { foo: 'bar' }
    const key = 'foo'
    const value = 'bar'

    eq.mockReturnValueOnce(true)

    assignValue(object, key, value)

    expect(eq).toHaveBeenCalledTimes(1)
    expect(eq).toHaveBeenCalledWith('bar', 'bar')
    expect(baseAssignValue).not.toHaveBeenCalled()
  })

  it('should assign value to key if the existing value is undefined and key is not in object', () => {
    const object = {}
    const key = 'foo'
    const value = undefined

    assignValue(object, key, value)

    expect(baseAssignValue).toHaveBeenCalledTimes(1)
    expect(baseAssignValue).toHaveBeenCalledWith(object, key, value)
  })

  it('should not assign value to key if the existing value is undefined and key is already in object', () => {
    const object = { foo: undefined }
    const key = 'foo'
    const value = undefined

    assignValue(object, key, value)

    expect(baseAssignValue).not.toHaveBeenCalled()
  })

  it('should assign value to key if the existing value is 0 and value is not 0', () => {
    const object = { foo: 0 }
    const key = 'foo'
    const value = 42

    assignValue(object, key, value)

    expect(baseAssignValue).toHaveBeenCalledTimes(1)
    expect(baseAssignValue).toHaveBeenCalledWith(object, key, value)
  })

  it('should not assign value to key if the existing value is 0 and value is also 0', () => {
    const object = { foo: 0 }
    const key = 'foo'
    const value = 0

    assignValue(object, key, value)

    expect(baseAssignValue).not.toHaveBeenCalled()
  })
})
