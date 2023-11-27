import stringToPath from './stringToPath'

describe('stringToPath', () => {
  it('should convert string to a property path array', () => {
    expect(stringToPath('')).toEqual([''])
    expect(stringToPath('.property')).toEqual(['', 'property'])
    expect(stringToPath('[0]')).toEqual(['[0]'])
    expect(stringToPath('[0][1]')).toEqual(['[0]', '[1]'])
    expect(stringToPath('["nested"]["property"]')).toEqual(['nested', 'property'])
    expect(stringToPath('nested.property')).toEqual(['nested', 'property'])
    expect(stringToPath('nested.property[0]')).toEqual(['nested', 'property', '[0]'])
    expect(stringToPath('[0].nested.property')).toEqual(['[0]', 'nested', 'property'])
    expect(stringToPath('.["nested"].property[0]')).toEqual(['', 'nested', 'property', '[0]'])
    expect(stringToPath('..property')).toEqual(['', '', 'property'])
    expect(stringToPath('[].property')).toEqual(['[]', 'property'])
  })
})
