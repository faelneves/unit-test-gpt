import arrayLikeKeys from './arrayLikeKeys'

describe('arrayLikeKeys', () => {
  it('should return an array of property names for an array-like value', () => {
    const arr = ['a', 'b', 'c']
    expect(arrayLikeKeys(arr)).toEqual(['0', '1', '2'])
  })

  it('should return an array of property names for an object with non-enumerable properties', () => {
    const obj = Object.create(null, {
      a: { value: 'A', enumerable: false },
      b: { value: 'B', enumerable: false },
      c: { value: 'C', enumerable: false }
    })
    expect(arrayLikeKeys(obj)).toEqual(['a', 'b', 'c'])
  })

  it('should return an array of property names for an object with inherited properties', () => {
    function Parent() {
      this.a = 'A'
    }
    Parent.prototype.b = 'B'
    const obj = new Parent()
    expect(arrayLikeKeys(obj)).toEqual(['a', 'b'])
  })

  it('should return an empty array for an empty array-like value', () => {
    const emptyArr = []
    expect(arrayLikeKeys(emptyArr)).toEqual([])
  })

  it('should return an empty array for an object with no properties', () => {
    const emptyObj = {}
    expect(arrayLikeKeys(emptyObj)).toEqual([])
  })

  it('should include numeric string keys for an array with sparse elements', () => {
    const sparseArr = Array(3)
    sparseArr[1] = 'b'
    expect(arrayLikeKeys(sparseArr)).toEqual(['0', '1', '2'])
  })

  it('should include numeric string keys for an object with sparse properties', () => {
    const sparseObj = { 1: 'b' }
    expect(arrayLikeKeys(sparseObj)).toEqual(['1'])
  })
})
