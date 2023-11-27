import hasUnicode from './hasUnicode'

describe('hasUnicode', () => {
  it('should return true if the string contains Unicode symbols', () => {
    const string = 'Hello 😊'
    expect(hasUnicode(string)).toBe(true)
  })

  it('should return false if the string does not contain Unicode symbols', () => {
    const string = 'Hello'
    expect(hasUnicode(string)).toBe(false)
  })
})
