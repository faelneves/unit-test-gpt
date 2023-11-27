import SetCache from './SetCache'

describe('SetCache', () => {
  describe('constructor', () => {
    it('should create an empty cache when no values are provided', () => {
      const cache = new SetCache()
      expect(cache.has(1)).toBe(false)
      expect(cache.has('foo')).toBe(false)
    })

    it('should add the provided values to the cache', () => {
      const values = [1, 'foo', { key: 'value' }]
      const cache = new SetCache(values)
      values.forEach(value => {
        expect(cache.has(value)).toBe(true)
      })
    })
  })

  describe('add', () => {
    it('should add the specified value to the cache', () => {
      const cache = new SetCache()
      cache.add(1)
      expect(cache.has(1)).toBe(true)
    })

    it('should return the cache instance', () => {
      const cache = new SetCache()
      expect(cache.add(1)).toBe(cache)
    })
  })

  describe('has', () => {
    it('should return true if the value is in the cache', () => {
      const cache = new SetCache()
      cache.add('foo')
      expect(cache.has('foo')).toBe(true)
    })

    it('should return false if the value is not in the cache', () => {
      const cache = new SetCache()
      expect(cache.has('foo')).toBe(false)
    })
  })
})
