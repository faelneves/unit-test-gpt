import findLast from './findLast';
import findLastIndex from './findLastIndex';
import isArrayLike from './isArrayLike';

describe('findLast', () => {
  describe('when collection is an array', () => {
    it('should return the last element that satisfies the predicate', () => {
      const collection = [1, 2, 3, 4];
      const predicate = (n) => n % 2 === 1;
      const result = findLast(collection, predicate);
      expect(result).toEqual(3);
    });

    it('should return undefined if no element satisfies the predicate', () => {
      const collection = [2, 4, 6, 8];
      const predicate = (n) => n % 2 === 1;
      const result = findLast(collection, predicate);
      expect(result).toBeUndefined();
    });

    it('should start searching from the specified index', () => {
      const collection = [1, 2, 3, 4];
      const predicate = (n) => n % 2 === 0;
      const fromIndex = 2;
      const result = findLast(collection, predicate, fromIndex);
      expect(result).toEqual(2);
    });
  });

  describe('when collection is an object', () => {
    it('should return the last element that satisfies the predicate', () => {
      const collection = { a: 1, b: 2, c: 3, d: 4 };
      const predicate = (n) => n % 2 === 1;
      const result = findLast(collection, predicate);
      expect(result).toEqual(3);
    });

    it('should return undefined if no element satisfies the predicate', () => {
      const collection = { a: 2, b: 4, c: 6, d: 8 };
      const predicate = (n) => n % 2 === 1;
      const result = findLast(collection, predicate);
      expect(result).toBeUndefined();
    });
  });

  describe('when collection is not an array or object', () => {
    it('should return undefined', () => {
      const collection = '1234';
      const predicate = (n) => n % 2 === 1;
      const result = findLast(collection, predicate);
      expect(result).toBeUndefined();
    });
  });
});
