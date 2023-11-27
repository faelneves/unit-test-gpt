import createCaseFirst from './createCaseFirst'
import castSlice from './castSlice'
import hasUnicode from './hasUnicode'
import stringToArray from './stringToArray'

describe('createCaseFirst', () => {
  it('should return an empty string if the input is empty', () => {
    const lowerFirst = createCaseFirst('toLowerCase')

    expect(lowerFirst('')).toEqual('')
  })

  it('should return the input string with the first character transformed according to the method name', () => {
    const lowerFirst = createCaseFirst('toLowerCase')
    const upperFirst = createCaseFirst('toUpperCase')

    expect(lowerFirst('hello')).toEqual('hello')
    expect(upperFirst('hello')).toEqual('Hello')
  })

  it('should handle unicode characters correctly', () => {
    const lowerFirst = createCaseFirst('toLowerCase')
    const upperFirst = createCaseFirst('toUpperCase')

    expect(lowerFirst('🚀️ Hello')).toEqual('🚀️ hello')
    expect(upperFirst('🚀️ Hello')).toEqual('🚀️ Hello')
  })

  it('should handle string that cannot be converted into an array of symbols', () => {
    const lowerFirst = createCaseFirst('toLowerCase')
    const upperFirst = createCaseFirst('toUpperCase')

    expect(lowerFirst('1234')).toEqual('1234')
    expect(upperFirst('1234')).toEqual('1234')
  })
})
