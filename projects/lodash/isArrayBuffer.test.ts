import isArrayBuffer from './isArrayBuffer';

describe('isArrayBuffer', () => {
  it('should return true if value is an ArrayBuffer', () => {
    const arrayBuffer = new ArrayBuffer(2);
    expect(isArrayBuffer(arrayBuffer)).toBe(true);
  });

  it('should return false if value is not an ArrayBuffer', () => {
    expect(isArrayBuffer(null)).toBe(false);
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer(123)).toBe(false);
    expect(isArrayBuffer('abc')).toBe(false);
    expect(isArrayBuffer(true)).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
    expect(isArrayBuffer(new Array(2))).toBe(false);
    expect(isArrayBuffer(new Map())).toBe(false);
    expect(isArrayBuffer(new Set())).toBe(false);
    expect(isArrayBuffer(new Date())).toBe(false);
    expect(isArrayBuffer(new Error())).toBe(false);
    expect(isArrayBuffer(/abc/)).toBe(false);
    expect(isArrayBuffer(Symbol('abc'))).toBe(false);
    expect(isArrayBuffer(() => {})).toBe(false);
    expect(isArrayBuffer(class {})).toBe(false);
  });
});
