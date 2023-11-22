import arrayReduce from './arrayReduce';

describe('arrayReduce', () => {
  it('should reduce the array using the iteratee function and return the accumulated value', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (accumulator, value) => accumulator + value;
    const accumulator = 0;
    const result = arrayReduce(array, iteratee, accumulator);

    expect(result).toBe(15);
  });

  it('should reduce the array using the iteratee function and initial value and return the accumulated value', () => {
    const array = [1, 2, 3, 4, 5];
    const iteratee = (accumulator, value) => accumulator + value;
    const accumulator = 10;
    const result = arrayReduce(array, iteratee, accumulator, true);

    expect(result).toBe(25);
  });

  it('should return the initial value when the array is empty', () => {
    const array = [];
    const iteratee = (accumulator, value) => accumulator + value;
    const accumulator = 10;
    const result = arrayReduce(array, iteratee, accumulator);

    expect(result).toBe(accumulator);
  });
});
