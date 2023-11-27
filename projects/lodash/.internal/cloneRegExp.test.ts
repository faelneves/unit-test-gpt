import cloneRegExp from './cloneRegExp'

describe('cloneRegExp', () => {
  it('should create a clone of the regular expression', () => {
    const regExp = /test/gi
    const clonedRegExp = cloneRegExp(regExp)
    
    expect(clonedRegExp).not.toBe(regExp)
    expect(clonedRegExp.source).toBe(regExp.source)
    expect(clonedRegExp.global).toBe(regExp.global)
    expect(clonedRegExp.ignoreCase).toBe(regExp.ignoreCase)
    expect(clonedRegExp.multiline).toBe(regExp.multiline)
    expect(clonedRegExp.sticky).toBe(regExp.sticky)
    expect(clonedRegExp.unicode).toBe(regExp.unicode)
    expect(clonedRegExp.lastIndex).toBe(regExp.lastIndex)
  })

  it('should handle regular expression flags properly', () => {
    const regExp = /test/gi
    const clonedRegExp = cloneRegExp(regExp)
    
    expect(regExp.flags).toBe('gi')
    expect(clonedRegExp.flags).toBe('gi')
  })

  it('should preserve the constructor of the regular expression', () => {
    const regExp = /test/gi
    const clonedRegExp = cloneRegExp(regExp)
    
    expect(clonedRegExp.constructor).toBe(regExp.constructor)
  })
})
