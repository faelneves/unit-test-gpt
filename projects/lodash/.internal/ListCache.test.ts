import ListCache from './ListCache'
import assocIndexOf from './assocIndexOf'

describe('ListCache', () => {
  let listCache

  beforeEach(() => {
    listCache = new ListCache()
  })

  describe('constructor', () => {
    it('should create an empty list cache when no entries are provided', () => {
      expect(listCache.size).toBe(0)
      expect(listCache.__data__).toEqual([])
    })

    it('should create a list cache with the provided entries', () => {
      const entries = [
        ['key1', 'value1'],
        ['key2', 'value2']
      ]
      listCache = new ListCache(entries)

      expect(listCache.size).toBe(entries.length)
      expect(listCache.__data__).toEqual(entries)
    })
  })

  describe('clear', () => {
    it('should remove all key-value entries from the list cache', () => {
      listCache.set('key1', 'value1')
      listCache.set('key2', 'value2')
      listCache.clear()

      expect(listCache.size).toBe(0)
      expect(listCache.__data__).toEqual([])
    })
  })

  describe('delete', () => {
    it('should remove the key-value entry from the list cache', () => {
      listCache.set('key1', 'value1')
      listCache.set('key2', 'value2')
      listCache.delete('key1')

      expect(listCache.size).toBe(1)
      expect(listCache.__data__).toEqual([['key2', 'value2']])
    })

    it('should return true if the entry was removed', () => {
      listCache.set('key1', 'value1')
      const result = listCache.delete('key1')

      expect(result).toBe(true)
    })

    it('should return false if the entry was not found', () => {
      const result = listCache.delete('key1')

      expect(result).toBe(false)
    })
  })

  describe('get', () => {
    it('should return the value for the key in the list cache', () => {
      listCache.set('key1', 'value1')
      const result = listCache.get('key1')

      expect(result).toBe('value1')
    })

    it('should return undefined if the key is not found in the list cache', () => {
      const result = listCache.get('key1')

      expect(result).toBe(undefined)
    })
  })

  describe('has', () => {
    it('should return true if the key exists in the list cache', () => {
      listCache.set('key1', 'value1')
      const result = listCache.has('key1')

      expect(result).toBe(true)
    })

    it('should return false if the key does not exist in the list cache', () => {
      const result = listCache.has('key1')

      expect(result).toBe(false)
    })
  })

  describe('set', () => {
    it('should set the key-value pair in the list cache', () => {
      listCache.set('key1', 'value1')

      expect(listCache.size).toBe(1)
      expect(listCache.__data__).toEqual([['key1', 'value1']])
    })

    it('should update the value if the key already exists in the list cache', () => {
      listCache.set('key1', 'value1')
      listCache.set('key1', 'updatedValue1')

      expect(listCache.size).toBe(1)
      expect(listCache.__data__).toEqual([['key1', 'updatedValue1']])
    })

    it('should return the list cache instance', () => {
      const result = listCache.set('key1', 'value1')

      expect(result).toBeInstanceOf(ListCache)
    })
  })
})
