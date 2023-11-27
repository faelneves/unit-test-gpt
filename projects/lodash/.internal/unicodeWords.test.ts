import unicodeWords from './unicodeWords'

describe('unicodeWords', () => {
  it('should return an array of words from a given string', () => {
    const string = 'hello 123 world! 🌍'
    const expected = ['hello', '123', 'world', '🌍']
    
    const result = unicodeWords(string)
    
    expect(result).toEqual(expected)
  })
  
  it('should return an empty array if the string is empty', () => {
    const string = ''
    const expected = []
    
    const result = unicodeWords(string)
    
    expect(result).toEqual(expected)
  })
  
  it('should handle special characters and symbols', () => {
    const string = '#$%Hello_123!@🌍'
    const expected = ['Hello', '123', '🌍']
    
    const result = unicodeWords(string)
    
    expect(result).toEqual(expected)
  })
  
  it('should handle consecutive punctuation characters', () => {
    const string = 'Hello...123!!!🌍'
    const expected = ['Hello', '123', '🌍']
    
    const result = unicodeWords(string)
    
    expect(result).toEqual(expected)
  })
  
  it('should handle words with apostrophes', () => {
    const string = "I'm don't let's"
    const expected = ["I'm", "don't", "let's"]
    
    const result = unicodeWords(string)
    
    expect(result).toEqual(expected)
  })
})
