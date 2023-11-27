import cacheHas from './cacheHas'

describe('cacheHas', () => {
  it('should return true if cache value for key exists', () => {
    const cache = new Map([['key1', 'value1'], ['key2', 'value2']])
    expect(cacheHas(cache, 'key1')).toBe(true)
  })

  it('should return false if cache value for key does not exist', () => {
    const cache = new Map([['key1', 'value1'], ['key2', 'value2']])
    expect(cacheHas(cache, 'key3')).toBe(false)
  })

  it('should return false if cache is empty', () => {
    const cache = new Map()
    expect(cacheHas(cache, 'key1')).toBe(false)
  })
})
