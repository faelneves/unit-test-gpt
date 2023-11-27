import zipWith from './zipWith';
import unzipWith from './unzipWith';

describe('zipWith', () => {
  it('should combine arrays and apply iteratee function', () => {
    const iteratee = (a, b, c) => a + b + c;
    const result = zipWith([1, 2], [10, 20], [100, 200], iteratee);
    expect(result).toEqual([111, 222]);
  });

  it('should combine arrays and apply iteratee function with single array', () => {
    const iteratee = (a) => a * 2;
    const result = zipWith([1, 2, 3, 4, 5], iteratee);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('should return empty array when no arrays provided', () => {
    const iteratee = (a) => a;
    const result = zipWith(iteratee);
    expect(result).toEqual([]);
  });

  it('should return empty array when empty arrays provided', () => {
    const iteratee = (a) => a;
    const result = zipWith([], [], [], iteratee);
    expect(result).toEqual([]);
  });

  it('should combine arrays with undefined iteratee', () => {
    const result = zipWith([1, 2], ['a', 'b'], [true, false]);
    expect(result).toEqual([[1, 'a', true], [2, 'b', false]]);
  });

  it('should combine arrays with null iteratee', () => {
    const result = zipWith([1, 2], ['a', 'b'], [true, false], null);
    expect(result).toEqual([[1, 'a', true], [2, 'b', false]]);
  });

  it('should combine arrays with non-function iteratee', () => {
    const result = zipWith([1, 2], ['a', 'b'], [true, false], 'sum');
    expect(result).toEqual([[1, 'a', true], [2, 'b', false]]);
  });

  it('should combine arrays with additional parameters in iteratee', () => {
    const iteratee = (a, b, c, x, y, z) => a + b + c + x + y + z;
    const result = zipWith([1, 2], [10, 20], [100, 200], iteratee, 1000, 2000, 3000);
    expect(result).toEqual([4111, 6222]);
  });
});
