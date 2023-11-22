import addMapEntry from './addMapEntry'

describe('addMapEntry', () => {
  it('should add the key-value pair to the map', () => {
    const map = new Map()
    const pair = ['key', 'value']

    addMapEntry(map, pair)

    expect(map.get('key')).toBe('value')
  })
})
