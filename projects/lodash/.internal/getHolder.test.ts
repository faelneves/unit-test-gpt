import getHolder from './getHolder'

describe('getHolder', () => {
  it('should return the placeholder value of the function', () => {
    const fn = (a, b, c) => {}
    fn.placeholder = '_'
    
    expect(getHolder(fn)).toBe('_')
  })

  it('should return undefined if the function does not have a placeholder value', () => {
    const fn = (a, b, c) => {}
    
    expect(getHolder(fn)).toBe(undefined)
  })
})
