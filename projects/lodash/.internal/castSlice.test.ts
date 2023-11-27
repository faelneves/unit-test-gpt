import castSlice from './castSlice'
import slice from '../slice'

describe('castSlice', () => {
  it('should cast array to a slice if start is 0 and end is greater than or equal to array length', () => {
    const array = [1, 2, 3]
    const start = 0
    const end = 3

    const result = castSlice(array, start, end)

    expect(result).toEqual(array)
    expect(result).not.toBe(array)
  })

  it('should cast array to a slice with specified start and end positions', () => {
    const array = [1, 2, 3, 4, 5]
    const start = 1
    const end = 4

    const result = castSlice(array, start, end)

    expect(result).toEqual(slice(array, start, end))
  })

  it('should cast array to a slice with default end position if omitted', () => {
    const array = [1, 2, 3, 4, 5]
    const start = 2

    const result = castSlice(array, start)

    expect(result).toEqual(slice(array, start))
  })
})
