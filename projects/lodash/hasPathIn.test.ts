import hasPathIn from './hasPathIn';

describe('hasPathIn', () => {
  it('should return true if path exists in object', () => {
    const object = { 'a': { 'b': 2 } };
    const path = 'a.b';

    const result = hasPathIn(object, path);

    expect(result).toBe(true);
  });

  it('should return false if path does not exist in object', () => {
    const object = { 'a': { 'b': 2 } };
    const path = 'a.c';

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });

  it('should return true if path exists in object using array notation', () => {
    const object = { 'a': { 'b': 2 } };
    const path = ['a', 'b'];

    const result = hasPathIn(object, path);

    expect(result).toBe(true);
  });

  it('should return false if path does not exist in object using array notation', () => {
    const object = { 'a': { 'b': 2 } };
    const path = ['a', 'c'];

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });

  it('should return false if object is null or undefined', () => {
    const object = null;
    const path = 'a.b';

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });

  it('should return false if object is an empty array', () => {
    const object = [];
    const path = '0';

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });

  it('should return true if object is an array and index is within bounds', () => {
    const object = [1, 2, 3];
    const path = '0';

    const result = hasPathIn(object, path);

    expect(result).toBe(true);
  });

  it('should return false if object is an array and index is out of bounds', () => {
    const object = [1, 2, 3];
    const path = '3';

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });

  it('should return true if object is an array-like object and index is within bounds', () => {
    const object = { '0': 'a', '1': 'b', length: 2 };
    const path = '0';

    const result = hasPathIn(object, path);

    expect(result).toBe(true);
  });

  it('should return false if object is an array-like object and index is out of bounds', () => {
    const object = { '0': 'a', '1': 'b', length: 2 };
    const path = '2';

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });

  it('should return false if object is an arguments object', () => {
    const object = (function() { return arguments; })('a', 'b', 'c');
    const path = '0';

    const result = hasPathIn(object, path);

    expect(result).toBe(false);
  });
});
