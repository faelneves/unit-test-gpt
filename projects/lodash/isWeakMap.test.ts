import isWeakMap from './isWeakMap';

describe('isWeakMap', () => {
  it('should return true if value is a weak map', () => {
    const weakMap = new WeakMap();
    expect(isWeakMap(weakMap)).toBe(true);
  });

  it('should return false if value is not a weak map', () => {
    const map = new Map();
    expect(isWeakMap(map)).toBe(false);

    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap(123)).toBe(false);
    expect(isWeakMap('abc')).toBe(false);
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap(true)).toBe(false);
    expect(isWeakMap(false)).toBe(false);
    expect(isWeakMap(Symbol())).toBe(false);

    class CustomWeakMap extends WeakMap {}
    const customWeakMap = new CustomWeakMap();
    expect(isWeakMap(customWeakMap)).toBe(false);

    class CustomMap extends Map {}
    const customMap = new CustomMap();
    expect(isWeakMap(customMap)).toBe(false);
  });
});
