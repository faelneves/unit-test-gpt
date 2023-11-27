import equalObjects from './equalObjects'
import getAllKeys from './getAllKeys'

describe('equalObjects', () => {
  it('should return true if two objects are equivalent', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 2, a: 1 }
    expect(equalObjects(obj1, obj2, 0, null, null, new Map())).toBe(true)
  })

  it('should return false if two objects are not equivalent', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, a: 1 }
    expect(equalObjects(obj1, obj2, 0, null, null, new Map())).toBe(false)
  })

  it('should return true if two objects are equivalent with partial comparison', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1 }
    expect(equalObjects(obj1, obj2, 1, null, null, new Map())).toBe(true)
  })

  it('should return false if two objects are not equivalent with partial comparison', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 3 }
    expect(equalObjects(obj1, obj2, 1, null, null, new Map())).toBe(false)
  })
})
