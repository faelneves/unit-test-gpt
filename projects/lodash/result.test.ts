import result from './result';

describe('result', () => {
  describe('when path exists in object', () => {
    it('should return the resolved value', () => {
      const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] };

      const path1 = 'a[0].b.c1';
      const result1 = result(object, path1);
      expect(result1).toBe(3);

      const path2 = 'a[0].b.c2';
      const result2 = result(object, path2);
      expect(result2).toBe(4);
    });
  });

  describe('when path does not exist in object', () => {
    it('should return the default value if specified', () => {
      const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] };

      const path = 'a[0].b.c3';
      const defaultValue = 'default';
      const result = result(object, path, defaultValue);

      expect(result).toBe(defaultValue);
    });

    it('should return undefined if default value is not specified', () => {
      const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] };

      const path = 'a[0].b.c3';
      const result = result(object, path);

      expect(result).toBeUndefined();
    });
  });

  describe('when path is empty', () => {
    it('should return the object itself', () => {
      const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] };

      const path = '';
      const result = result(object, path);

      expect(result).toBe(object);
    });
  });

  describe('when path contains an empty key', () => {
    it('should return the default value if specified', () => {
      const object = { 'a': [{ 'b': { '': 3 } }] };

      const path = 'a[0].b.';
      const defaultValue = 'default';
      const result = result(object, path, defaultValue);

      expect(result).toBe(defaultValue);
    });

    it('should return undefined if default value is not specified', () => {
      const object = { 'a': [{ 'b': { '': 3 } }] };

      const path = 'a[0].b.';
      const result = result(object, path);

      expect(result).toBeUndefined();
    });
  });

  describe('when path contains a class name', () => {
    it('should return the resolved value', () => {
      const object = { 'a': [{ 'className': 'some-class' }] };

      const path = 'a[0].className';
      const result = result(object, path);

      expect(result).toBe('some-class');
    });
  });
});
