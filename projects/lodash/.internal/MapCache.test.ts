import MapCache from './MapCache'
import Hash from './Hash'

describe('MapCache', () => {
  let mapCache

  beforeEach(() => {
    mapCache = new MapCache()
  })

  it('should create an empty map cache', () => {
    expect(mapCache.size).toBe(0)
    expect(mapCache.getAllData()).toEqual({ hash: new Hash(), map: new Map(), string: new Hash() })
  })

  it('should set a key-value pair in the map cache', () => {
    mapCache.set('key', 'value')
    expect(mapCache.size).toBe(1)
    expect(mapCache.get('key')).toBe('value')
  })

  it('should get a value from the map cache', () => {
    mapCache.set('key', 'value')
    expect(mapCache.get('key')).toBe('value')
  })

  it('should check if a key exists in the map cache', () => {
    mapCache.set('key', 'value')
    expect(mapCache.has('key')).toBe(true)
    expect(mapCache.has('nonexistent')).toBe(false)
  })

  it('should delete a key-value pair from the map cache', () => {
    mapCache.set('key', 'value')
    expect(mapCache.size).toBe(1)
    expect(mapCache.delete('key')).toBe(true)
    expect(mapCache.size).toBe(0)
    expect(mapCache.has('key')).toBe(false)
  })

  it('should clear all key-value pairs from the map cache', () => {
    mapCache.set('key', 'value')
    expect(mapCache.size).toBe(1)
    mapCache.clear()
    expect(mapCache.size).toBe(0)
    expect(mapCache.has('key')).toBe(false)
  })
})
