import property from './property';
import { getByTestId } from '@testing-library/dom';

describe('property', () => {
  describe('when path is a string', () => {
    it('should return a function that returns the value at the given path of an object', () => {
      const obj = {
        a: {
          b: 2
        }
      };
      
      const getPathValue = property('a.b');
      expect(getPathValue(obj)).toBe(2);
    });

    it('should return undefined if the property does not exist in the object', () => {
      const obj = {
        a: {
          b: 2
        }
      };

      const getPathValue = property('c');
      expect(getPathValue(obj)).toBe(undefined);
    });
  });

  describe('when path is an array', () => {
    it('should return a function that returns the value at the given path of an object', () => {
      const obj = {
        a: {
          b: 2
        }
      };
      
      const getPathValue = property(['a', 'b']);
      expect(getPathValue(obj)).toBe(2);
    });

    it('should return undefined if the property does not exist in the object', () => {
      const obj = {
        a: {
          b: 2
        }
      };

      const getPathValue = property(['c']);
      expect(getPathValue(obj)).toBe(undefined);
    });
  });

  describe('when path is not a valid key or path', () => {
    it('should return undefined', () => {
      const obj = {
        a: {
          b: 2
        }
      };

      const getPathValue = property(null);
      expect(getPathValue(obj)).toBe(undefined);
      
      const getPathValue2 = property(123);
      expect(getPathValue2(obj)).toBe(undefined);
      
      const getPathValue3 = property({ key: 'a.b' });
      expect(getPathValue3(obj)).toBe(undefined);
    });
  });

  describe('when path is a nested object key', () => {
    it('should return a function that returns the nested object at the given path', () => {
      const obj = {
        a: {
          b: {
            c: 2
          }
        }
      };

      const getPathValue = property('a.b');
      expect(getPathValue(obj)).toEqual({ c: 2 });
    });

    it('should return undefined if the nested object does not exist in the object', () => {
      const obj = {
        a: {
          b: {
            c: 2
          }
        }
      };

      const getPathValue = property('a.c');
      expect(getPathValue(obj)).toBe(undefined);
    });
  });
});
