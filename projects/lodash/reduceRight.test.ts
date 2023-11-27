import reduceRight from './reduceRight';

describe('reduceRight', () => {
  describe('with array', () => {
    it('should reduce the array from right to left', () => {
      const array = [[0, 1], [2, 3], [4, 5]];
      const iteratee = (flattened, other) => flattened.concat(other);
      const accumulator = [];

      const result = reduceRight(array, iteratee, accumulator);

      expect(result).toEqual([4, 5, 2, 3, 0, 1]);
    });

    it('should reduce the array from right to left with initial value', () => {
      const array = [[2, 3], [4, 5]];
      const iteratee = (flattened, other) => flattened.concat(other);
      const accumulator = [0, 1];

      const result = reduceRight(array, iteratee, accumulator);

      expect(result).toEqual([0, 1, 4, 5, 2, 3]);
    });
  });

  describe('with object', () => {
    it('should reduce the object from right to left', () => {
      const object = { a: 1, b: 2, c: 3 };
      const iteratee = (result, value) => result + value * 2;
      const accumulator = 0;

      const result = reduceRight(object, iteratee, accumulator);

      expect(result).toEqual(12);
    });

    it('should reduce the object from right to left with initial value', () => {
      const object = { a: 1, b: 2, c: 3 };
      const iteratee = (result, value) => result + value * 2;
      const accumulator = 5;

      const result = reduceRight(object, iteratee, accumulator);

      expect(result).toEqual(17);
    });
  });
});
