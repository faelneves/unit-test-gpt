import baseSum from './baseSum'

describe('baseSum', () => {
  it('should return the sum of an array of numbers', () => {
    const array = [1, 2, 3, 4, 5]
    const sum = baseSum(array, (value) => value)
    expect(sum).toBe(15)
  })

  it('should return the sum of an array of objects by a property', () => {
    const array = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
    ]
    const sum = baseSum(array, (item) => item.value)
    expect(sum).toBe(60)
  })

  it('should return 0 if the array is empty', () => {
    const array: any[] = []
    const sum = baseSum(array, (value) => value)
    expect(sum).toBe(0)
  })

  it('should skip undefined values in the iteration', () => {
    const array = [1, 2, undefined, 4, 5]
    const sum = baseSum(array, (value) => value)
    expect(sum).toBe(12)
  })
})
