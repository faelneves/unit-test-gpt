import composeArgsRight from './composeArgsRight'

describe('composeArgsRight', () => {
  it('should return the correctly composed arguments', () => {
    const args = [1, 2, 3]
    const partials = [4, 5]
    const holders = [0, 2]
    const isCurried = true

    const result = composeArgsRight(args, partials, holders, isCurried)

    expect(result).toEqual([1, 4, 3, 5])
  })

  it('should return an empty array when there are no arguments or partials provided', () => {
    const args = []
    const partials = []
    const holders = []
    const isCurried = false

    const result = composeArgsRight(args, partials, holders, isCurried)

    expect(result).toEqual([])
  })

  it('should return an array with only the partials when there are no arguments provided', () => {
    const args = []
    const partials = [1, 2, 3]
    const holders = [0, 2]
    const isCurried = true

    const result = composeArgsRight(args, partials, holders, isCurried)

    expect(result).toEqual([1, undefined, 2, undefined, 3])
  })

  it('should return an array with only the arguments when there are no partials provided', () => {
    const args = [1, 2, 3]
    const partials = []
    const holders = []
    const isCurried = false

    const result = composeArgsRight(args, partials, holders, isCurried)

    expect(result).toEqual([1, 2, 3])
  })
})
