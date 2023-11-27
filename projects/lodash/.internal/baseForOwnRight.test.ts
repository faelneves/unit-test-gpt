import baseForOwnRight from './baseForOwnRight'
import baseForRight from './baseForRight'
import keys from '../keys'

describe('baseForOwnRight', () => {
  it('should iterate over object properties in reverse order', () => {
    // Create a mock object with properties
    const object = { a: 1, b: 2, c: 3 }
    
    // Create a mock iteratee function
    const iteratee = jest.fn()
    
    // Call the baseForOwnRight function
    baseForOwnRight(object, iteratee)
    
    // Assert that the iteratee function was called with the correct arguments
    expect(iteratee).toHaveBeenNthCalledWith(1, 3, 'c', object)
    expect(iteratee).toHaveBeenNthCalledWith(2, 2, 'b', object)
    expect(iteratee).toHaveBeenNthCalledWith(3, 1, 'a', object)
  })
})
