import Stack from './Stack'

describe('Stack', () => {
  describe('constructor', () => {
    it('should create a stack cache object with no entries', () => {
      const stack = new Stack()
      expect(stack.size).toBe(0)
    })

    it('should create a stack cache object with provided entries', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)
      expect(stack.size).toBe(entries.length)
    })
  })

  describe('clear', () => {
    it('should remove all key-value entries from the stack', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      stack.clear()

      expect(stack.size).toBe(0)
    })
  })

  describe('delete', () => {
    it('should remove the key and its value from the stack', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      stack.delete('key1')

      expect(stack.has('key1')).toBe(false)
      expect(stack.size).toBe(entries.length - 1)
    })

    it('should return true if the entry was removed', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      const result = stack.delete('key1')

      expect(result).toBe(true)
    })

    it('should return false if the entry was not removed', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      const result = stack.delete('key3')

      expect(result).toBe(false)
    })
  })

  describe('get', () => {
    it('should return the stack value for the given key', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      const result = stack.get('key2')

      expect(result).toBe('value2')
    })
  })

  describe('has', () => {
    it('should return true if a stack value for the given key exists', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      const result = stack.has('key1')

      expect(result).toBe(true)
    })

    it('should return false if a stack value for the given key does not exist', () => {
      const entries = [['key1', 'value1'], ['key2', 'value2']]
      const stack = new Stack(entries)

      const result = stack.has('key3')

      expect(result).toBe(false)
    })
  })

  describe('set', () => {
    it('should set the stack key to the given value', () => {
      const stack = new Stack()

      stack.set('key1', 'value1')

      expect(stack.get('key1')).toBe('value1')
      expect(stack.size).toBe(1)
    })

    it('should return the stack cache instance', () => {
      const stack = new Stack()

      const result = stack.set('key1', 'value1')

      expect(result).toBe(stack)
    })
  })
})
