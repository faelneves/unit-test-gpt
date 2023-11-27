import baseClone from './baseClone'
import Stack from './Stack'

describe('baseClone', () => {
  it('should clone non-object values', () => {
    expect(baseClone(42)).toBe(42);
    expect(baseClone('hello')).toBe('hello');
    expect(baseClone(null)).toBe(null);
    expect(baseClone(undefined)).toBe(undefined);
    expect(baseClone(true)).toBe(true);
  });

  it('should clone arrays', () => {
    const arr = [1, 2, 3];
    const newArr = baseClone(arr);
    expect(newArr).toEqual(arr);
    expect(newArr).not.toBe(arr);
  });

  it('should clone objects', () => {
    const obj = { a: 1, b: 2 };
    const newObj = baseClone(obj);
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
  });

  it('should clone nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    const newObj = baseClone(obj);
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
    expect(newObj.a).not.toBe(obj.a);
    expect(newObj.a.b).not.toBe(obj.a.b);
  });

  it('should clone objects with circular references', () => {
    const obj = { a: {} };
    obj.a.b = obj;
    const newObj = baseClone(obj);
    expect(newObj).toEqual(obj);
    expect(newObj).not.toBe(obj);
    expect(newObj.a.b).toEqual(newObj);
    expect(newObj.a.b).not.toBe(obj);
  });

  it('should clone typed arrays', () => {
    const typedArray = new Uint8Array([1, 2, 3]);
    const newTypedArray = baseClone(typedArray);
    expect(newTypedArray).toEqual(typedArray);
    expect(newTypedArray).not.toBe(typedArray);
  });

  it('should clone Maps', () => {
    const map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    const newMap = baseClone(map);
    expect(newMap).toEqual(map);
    expect(newMap).not.toBe(map);
  });

  it('should clone Sets', () => {
    const set = new Set();
    set.add(1);
    set.add(2);
    const newSet = baseClone(set);
    expect(newSet).toEqual(set);
    expect(newSet).not.toBe(set);
  });

  it('should clone Date objects', () => {
    const date = new Date();
    const newDate = baseClone(date);
    expect(newDate).toEqual(date);
    expect(newDate).not.toBe(date);
  });

  it('should clone RegExp objects', () => {
    const regex = /test/gi;
    const newRegex = baseClone(regex);
    expect(newRegex).toEqual(regex);
    expect(newRegex).not.toBe(regex);
  });

  it('should clone other Cloneable objects', () => {
    const customCloneable = {
      [Symbol.toStringTag]: 'CustomCloneable',
      clone: () => ({})
    };
    const newCustomCloneable = baseClone(customCloneable);
    expect(newCustomCloneable).toEqual(customCloneable);
    expect(newCustomCloneable).not.toBe(customCloneable);
  });
});
