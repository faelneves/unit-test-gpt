import transform from './transform';

describe('transform', () => {
  it('should iterate over an array and accumulate values based on the iteratee function', () => {
    const input = [2, 3, 4];
    const iteratee = (result, n) => {
      result.push(n *= n);
      return n % 2 === 0;
    };
    const expected = [4, 9];
    
    expect(transform(input, iteratee, [])).toEqual(expected);
  });
  
  it('should iterate over an object and accumulate values based on the iteratee function', () => {
    const input = { 'a': 1, 'b': 2, 'c': 1 };
    const iteratee = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
    };
    const expected = { '1': ['a', 'c'], '2': ['b'] };
    
    expect(transform(input, iteratee, {})).toEqual(expected);
  });
  
  it('should create a new object with the same prototype if accumulator is not provided', () => {
    const input = {};
    const iteratee = jest.fn();
    
    transform(input, iteratee);
    
    expect(iteratee.mock.calls[0][0]).toEqual(Object.create(null));
  });
  
  it('should create a new array if the object is an array-like object', () => {
    const input = {};
    const iteratee = jest.fn();
    
    transform(input, iteratee);
    
    expect(iteratee.mock.calls[0][0]).toEqual([]);
  });
});
