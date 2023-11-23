import arrayReduceRight from './arrayReduceRight';

describe('arrayReduceRight', () => {
  it('should return the accumulated value', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (acc, val) => acc + val;
    const accumulator = 0;
    const result = arrayReduceRight(array, iteratee, accumulator, false);
    expect(result).toEqual(15);
  });

  it('should use the last element of the array as the initial value', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (acc, val) => acc - val;
    const result = arrayReduceRight(array, iteratee, undefined, true);
    expect(result).toEqual(-13);
  });

  it('should return the initial value if the array is empty and initAccum is true', () => {
    const array = [];
    const iteratee = (acc, val) => acc * val;
    const accumulator = 10;
    const result = arrayReduceRight(array, iteratee, accumulator, true);
    expect(result).toEqual(10);
  });

  it('should return the initial value if the array is empty and initAccum is false', () => {
    const array = [];
    const iteratee = (acc, val) => acc * val;
    const accumulator = 10;
    const result = arrayReduceRight(array, iteratee, accumulator, false);
    expect(result).toEqual(10);
  });
});
