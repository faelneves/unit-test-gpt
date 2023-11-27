import keyBy from './keyBy';

describe('keyBy', () => {
  it('should return an empty object for an empty array', () => {
    const array = [];
    const iteratee = jest.fn();
    expect(keyBy(array, iteratee)).toEqual({});
    expect(iteratee).not.toHaveBeenCalled();
  });
  
  it('should return an empty object for an empty object', () => {
    const obj = {};
    const iteratee = jest.fn();
    expect(keyBy(obj, iteratee)).toEqual({});
    expect(iteratee).not.toHaveBeenCalled();
  });

  it('should create an object with keys generated from iteratee function and corresponding values', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    const iteratee = (item) => String.fromCharCode(item.code);
    expect(keyBy(array, iteratee)).toEqual({ 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } });
  });

  it('should handle arrays with duplicate keys and return the last element for each key', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 },
      { 'dir': 'up', 'code': 97 },
      { 'dir': 'down', 'code': 100 }
    ];
    const iteratee = (item) => String.fromCharCode(item.code);
    expect(keyBy(array, iteratee)).toEqual({ 'a': { 'dir': 'up', 'code': 97 }, 'd': { 'dir': 'down', 'code': 100 } });
  });
});
