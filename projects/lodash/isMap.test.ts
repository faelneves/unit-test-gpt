import isMap from './isMap';

describe('isMap', () => {
  it('should return true for a Map object', () => {
    const map = new Map();
    expect(isMap(map)).toBe(true);
  });

  it('should return false for a WeakMap object', () => {
    const weakMap = new WeakMap();
    expect(isMap(weakMap)).toBe(false);
  });

  it('should return false for a regular object', () => {
    const obj = { key: 'value' };
    expect(isMap(obj)).toBe(false);
  });

  it('should return false for an array', () => {
    const arr = [1, 2, 3];
    expect(isMap(arr)).toBe(false);
  });

  it('should return false for a string', () => {
    const str = 'Hello, world!';
    expect(isMap(str)).toBe(false);
  });

  it('should return false for a number', () => {
    const num = 123;
    expect(isMap(num)).toBe(false);
  });

  it('should return false for null', () => {
    const n = null;
    expect(isMap(n)).toBe(false);
  });

  it('should return false for undefined', () => {
    const u = undefined;
    expect(isMap(u)).toBe(false);
  });
});
