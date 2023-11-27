import isPlainObject from './isPlainObject';

describe('isPlainObject', () => {
  it('should return true for plain object created with Object constructor', () => {
    const obj = new Object();
    expect(isPlainObject(obj)).toBe(true);
  });

  it('should return true for plain object created with literal notation', () => {
    const obj = { a: 1, b: 2 };
    expect(isPlainObject(obj)).toBe(true);
  });

  it('should return false for null', () => {
    const obj = null;
    expect(isPlainObject(obj)).toBe(false);
  });

  it('should return false for undefined', () => {
    const obj = undefined;
    expect(isPlainObject(obj)).toBe(false);
  });

  it('should return false for array', () => {
    const obj = [1, 2, 3];
    expect(isPlainObject(obj)).toBe(false);
  });

  it('should return false for object with prototype', () => {
    const prototype = { a: 1 };
    const obj = Object.create(prototype);
    expect(isPlainObject(obj)).toBe(false);
  });

  it('should return true for object with null prototype', () => {
    const obj = Object.create(null);
    expect(isPlainObject(obj)).toBe(true);
  });
});
