import createMathOperation from './createMathOperation'
import baseToNumber from './baseToNumber'
import baseToString from './baseToString'

describe('createMathOperation', () => {
  it('should return defaultValue when both value and other are undefined', () => {
    const operator = jest.fn()
    const defaultValue = 0
    const mathOperation = createMathOperation(operator, defaultValue)

    const result = mathOperation(undefined, undefined)

    expect(result).toBe(defaultValue)
  })

  it('should return value when other is undefined', () => {
    const operator = jest.fn()
    const defaultValue = 0
    const mathOperation = createMathOperation(operator, defaultValue)
    const value = 5

    const result = mathOperation(value, undefined)

    expect(result).toBe(value)
  })

  it('should return other when value is undefined', () => {
    const operator = jest.fn()
    const defaultValue = 0
    const mathOperation = createMathOperation(operator, defaultValue)
    const other = 10

    const result = mathOperation(undefined, other)

    expect(result).toBe(other)
  })

  it('should convert string values to numbers before performing the operation', () => {
    const operator = jest.fn()
    const defaultValue = 0
    const mathOperation = createMathOperation(operator, defaultValue)
    const value = '5'
    const other = '10'
    baseToNumber.mockReturnValueOnce(5)
    baseToNumber.mockReturnValueOnce(10)

    mathOperation(value, other)

    expect(baseToNumber).toHaveBeenCalledTimes(2)
    expect(baseToNumber).toHaveBeenCalledWith(value)
    expect(baseToNumber).toHaveBeenCalledWith(other)
  })

  it('should convert values to strings before performing the operation', () => {
    const operator = jest.fn()
    const defaultValue = ''
    const mathOperation = createMathOperation(operator, defaultValue)
    const value = 5
    const other = 10
    baseToString.mockReturnValueOnce('5')
    baseToString.mockReturnValueOnce('10')

    mathOperation(value, other)

    expect(baseToString).toHaveBeenCalledTimes(2)
    expect(baseToString).toHaveBeenCalledWith(value)
    expect(baseToString).toHaveBeenCalledWith(other)
  })

  it('should call the operator function with the converted values', () => {
    const operator = jest.fn()
    const defaultValue = 0
    const mathOperation = createMathOperation(operator, defaultValue)
    const value = 5
    const other = 10
    baseToNumber.mockReturnValueOnce(5)
    baseToNumber.mockReturnValueOnce(10)

    mathOperation(value, other)

    expect(operator).toHaveBeenCalledWith(5, 10)
  })

  it('should return the result of the operator function', () => {
    const operator = jest.fn().mockReturnValue(15)
    const defaultValue = 0
    const mathOperation = createMathOperation(operator, defaultValue)
    const value = 5
    const other = 10
    baseToNumber.mockReturnValueOnce(5)
    baseToNumber.mockReturnValueOnce(10)

    const result = mathOperation(value, other)

    expect(result).toBe(15)
  })
})
