import compareAscending from './compareAscending'
import isSymbol from '../isSymbol'

describe('compareAscending', () => {
  it('should return 1 when value is greater than other', () => {
    const value = 5
    const other = 3
    expect(compareAscending(value, other)).toBe(1)
  })

  it('should return -1 when value is smaller than other', () => {
    const value = 3
    const other = 5
    expect(compareAscending(value, other)).toBe(-1)
  })

  it('should return 0 when value is equal to other', () => {
    const value = 5
    const other = 5
    expect(compareAscending(value, other)).toBe(0)
  })

  // Additional test case for edge case
  it('should return 1 when value is null and other is defined and reflexive', () => {
    const value = null
    const other = 5
    expect(compareAscending(value, other)).toBe(1)
  })

  // Additional test case for edge case
  it('should return -1 when value is defined and reflexive and other is null', () => {
    const value = 5
    const other = null
    expect(compareAscending(value, other)).toBe(-1)
  })

  // Additional test case for edge case
  it('should return 0 when value is undefined and reflexive', () => {
    const value = undefined
    const other = 5
    expect(compareAscending(value, other)).toBe(0)
  })

  // Additional test case for edge case
  it('should return 0 when both value and other are undefined', () => {
    const value = undefined
    const other = undefined
    expect(compareAscending(value, other)).toBe(0)
  })

  // Additional test case for edge case
  it('should return 1 when value is symbol and other is defined and reflexive', () => {
    const value = Symbol()
    const other = 5
    expect(compareAscending(value, other)).toBe(1)
  })

  // Additional test case for edge case
  it('should return -1 when value is defined and reflexive and other is symbol', () => {
    const value = 5
    const other = Symbol()
    expect(compareAscending(value, other)).toBe(-1)
  })

  // Additional test case for edge case
  it('should return -1 when value is symbol, other is defined and reflexive, and value is smaller than other', () => {
    const value = Symbol()
    const other = 'abc'
    expect(compareAscending(value, other)).toBe(-1)
  })

  // Additional test case for edge case
  it('should return 1 when value is string and other is defined and reflexive, and value is greater than other', () => {
    const value = 'abc'
    const other = Symbol()
    expect(compareAscending(value, other)).toBe(1)
  })

  // Additional test case for edge case
  it('should return 1 when value is string, other is defined and reflexive, and value.localeCompare(other) is greater than 0', () => {
    const value = 'bcd'
    const other = 'abc'
    expect(compareAscending(value, other)).toBe(1)
  })

  // Additional test case for edge case
  it('should return -1 when value is undefined, other is reflexive, and other is not null or symbol', () => {
    const value = undefined
    const other = 5
    expect(compareAscending(value, other)).toBe(-1)
  })
})
