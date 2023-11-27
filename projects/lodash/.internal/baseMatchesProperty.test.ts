import baseMatchesProperty from './baseMatchesProperty';
import baseIsEqual from './baseIsEqual';
import get from '../get';
import hasIn from '../hasIn';
import isKey from './isKey';
import isStrictComparable from './isStrictComparable';
import matchesStrictComparable from './matchesStrictComparable';
import toKey from './toKey';

describe('baseMatchesProperty', () => {
  describe('when the path is a valid key and the srcValue is strictly comparable', () => {
    it('should return the result of matchesStrictComparable function', () => {
      const path = 'foo';
      const srcValue = 'bar';
      const object = { foo: 'bar' };

      const result = baseMatchesProperty(path, srcValue)(object);

      expect(result).toBe(true);
    });
  });

  describe('when the path is not a valid key or the srcValue is not strictly comparable', () => {
    it('should return the result of baseIsEqual function', () => {
      const path = 'foo';
      const srcValue = 'bar';
      const object = { foo: 'baz' };

      const result = baseMatchesProperty(path, srcValue)(object);

      expect(result).toBe(false);
    });
  });

  describe('when objValue is undefined and objValue is not equal to srcValue', () => {
    it('should return the result of hasIn function', () => {
      const path = 'foo';
      const srcValue = 'bar';
      const object = {};

      const result = baseMatchesProperty(path, srcValue)(object);

      expect(result).toBe(false);
    });
  });

  describe('when objValue is undefined and objValue is equal to srcValue', () => {
    it('should return the result of hasIn function', () => {
      const path = 'foo';
      const srcValue = undefined;
      const object = {};

      const result = baseMatchesProperty(path, srcValue)(object);

      expect(result).toBe(false);
    });
  });

  describe('when objValue is not undefined and objValue is equal to srcValue', () => {
    it('should return the result of baseIsEqual function', () => {
      const path = 'foo';
      const srcValue = 'bar';
      const object = { foo: 'bar' };

      const result = baseMatchesProperty(path, srcValue)(object);

      expect(result).toBe(true);
    });
  });

  describe('when objValue is not undefined and objValue is not equal to srcValue', () => {
    it('should return the result of baseIsEqual function', () => {
      const path = 'foo';
      const srcValue = 'bar';
      const object = { foo: 'baz' };

      const result = baseMatchesProperty(path, srcValue)(object);

      expect(result).toBe(false);
    });
  });
});
