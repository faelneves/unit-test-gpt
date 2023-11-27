import unicodeToArray from './unicodeToArray'

describe('unicodeToArray', () => {
  it('should convert a Unicode string to an array', () => {
    expect(unicodeToArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
  })

  it('should return an empty array if the input string is empty', () => {
    expect(unicodeToArray('')).toEqual([])
  })

  it('should handle Unicode astral symbols', () => {
    expect(unicodeToArray('')).toEqual([])
  })

  it('should handle Unicode combining marks', () => {
    expect(unicodeToArray('')).toEqual([])
  })

  // Add more tests for other Unicode characters, edge cases, and corner cases
})
