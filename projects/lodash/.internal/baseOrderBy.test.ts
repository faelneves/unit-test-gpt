import baseOrderBy from './baseOrderBy'

describe('baseOrderBy', () => {
  it('should return sorted array based on iteratees and orders', () => {
    const collection = [{ name: 'John', age: 30 }, { name: 'Jane', age: 40 }, { name: 'Bob', age: 20 }]
    const iteratees = ['name', 'age']
    const orders = ['asc', 'desc']
    
    const result = baseOrderBy(collection, iteratees, orders)
    
    expect(result).toEqual([{ name: 'Bob', age: 20 }, { name: 'Jane', age: 40 }, { name: 'John', age: 30 }])
  })
  
  it('should return sorted array with single iteratee and order', () => {
    const collection = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }]
    const iteratees = ['name']
    const orders = ['desc']
    
    const result = baseOrderBy(collection, iteratees, orders)
    
    expect(result).toEqual([{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }])
  })
  
  it('should return sorted array with identity function if no iteratees provided', () => {
    const collection = [{ name: 'John', age: 30 }, { name: 'Jane', age: 40 }, { name: 'Bob', age: 20 }]
    const iteratees = []
    const orders = []
    
    const result = baseOrderBy(collection, iteratees, orders)
    
    expect(result).toEqual(collection)
  })
  
  it('should return an empty array if the collection is empty', () => {
    const collection = []
    const iteratees = ['name', 'age']
    const orders = ['asc', 'desc']
    
    const result = baseOrderBy(collection, iteratees, orders)
    
    expect(result).toEqual([])
  })
})
