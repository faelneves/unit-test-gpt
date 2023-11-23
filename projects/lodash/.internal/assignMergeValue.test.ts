import assignMergeValue from './assignMergeValue'
import baseAssignValue from './baseAssignValue'
import eq from '../eq'

describe('assignMergeValue', () => {
  it('should assign value if it is not undefined and not equal to existing value in object', () => {
    const object = { foo: 1 }
    const key = 'foo'
    const value = 2

    assignMergeValue(object, key, value)

    expect(object).toEqual({ foo: 2 })
  })

  it('should assign value if it is undefined but key not in object', () => {
    const object = { foo: 1 }
    const key = 'bar'
    const value = undefined

    assignMergeValue(object, key, value)

    expect(object).toEqual({ foo: 1, bar: undefined })
  })

  it('should not assign value if it is undefined and key already in object', () => {
    const object = { foo: 1 }
    const key = 'foo'
    const value = undefined

    assignMergeValue(object, key, value)

    expect(object).toEqual({ foo: 1 })
  })

  it('should not assign value if it is not undefined but equal to existing value in object', () => {
    const object = { foo: 1 }
    const key = 'foo'
    const value = 1

    assignMergeValue(object, key, value)

    expect(object).toEqual({ foo: 1 })
  })
})
