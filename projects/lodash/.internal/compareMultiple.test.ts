import compareMultiple from './compareMultiple'
import compareAscending from './compareAscending'

describe('compareMultiple', () => {
  it('should return 0 if both objects have no criteria', () => {
    const object = { criteria: [] }
    const other = { criteria: [] }
    const orders: any[] = []
  
    const result = compareMultiple(object, other, orders)
  
    expect(result).toBe(0)
  })
  
  it('should return 0 if both objects have the same criteria', () => {
    const object = { criteria: ['a', 'b', 'c'] }
    const other = { criteria: ['a', 'b', 'c'] }
    const orders: any[] = []
  
    const result = compareMultiple(object, other, orders)
  
    expect(result).toBe(0)
  })
  
  it('should sort objects based on criteria ascendingly', () => {
    const object = { criteria: [1, 2, 3] }
    const other = { criteria: [2, 3, 4] }
    const orders: any[] = []
  
    const result = compareMultiple(object, other, orders)
  
    expect(result).toBe(-1)
  })
  
  it('should sort objects based on criteria descendingly', () => {
    const object = { criteria: [1, 2, 3] }
    const other = { criteria: [2, 3, 4] }
    const orders = ['desc', 'desc', 'desc']
  
    const result = compareMultiple(object, other, orders)
  
    expect(result).toBe(1)
  })
  
  it('should use custom comparison function for specific criteria', () => {
    const object = { criteria: [1, 2, 3] }
    const other = { criteria: [2, 3, 4] }
    const orders = [(a, b) => b - a, (a, b) => b - a, (a, b) => b - a]
  
    const result = compareMultiple(object, other, orders)
  
    expect(result).toBe(-1)
  })
})
