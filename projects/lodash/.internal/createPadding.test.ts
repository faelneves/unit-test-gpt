import createPadding from './createPadding'

describe('createPadding', () => {
  it('should return a string with the specified length and default padding character if no character is provided', () => {
    const result = createPadding(5)
    expect(result).toHaveLength(5)
    expect(result).toEqual('     ')
  })

  it('should return a string with the specified length and padding character', () => {
    const result = createPadding(5, '*')
    expect(result).toHaveLength(5)
    expect(result).toEqual('*****')
  })

  it('should truncate the padding character string if its length exceeds the specified length', () => {
    const result = createPadding(5, '**********')
    expect(result).toHaveLength(5)
    expect(result).toEqual('*****')
  })

  it('should return an empty string if the specified length is zero', () => {
    const result = createPadding(0)
    expect(result).toHaveLength(0)
    expect(result).toEqual('')
  })

  it('should handle unicode characters correctly', () => {
    const result = createPadding(5, '😄')
    expect(result).toHaveLength(5)
    expect(result).toEqual('😄😄😄')
  })

  it('should handle multi-byte unicode characters correctly', () => {
    const result = createPadding(5, '🌍')
    expect(result).toHaveLength(5)
    expect(result).toEqual('🌍🌍')
  })
});
