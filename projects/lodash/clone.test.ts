import clone from './clone';

describe('clone', () => {
  it('should create a shallow clone of an object', () => {
    const obj = { foo: 'bar' };
    const clonedObj = clone(obj);

    expect(clonedObj).toEqual(obj); // values are equal
    expect(clonedObj).not.toBe(obj); // object references are not the same
  });

  it('should create a shallow clone of an array', () => {
    const arr = [1, 2, 3];
    const clonedArr = clone(arr);

    expect(clonedArr).toEqual(arr); // values are equal
    expect(clonedArr).not.toBe(arr); // array references are not the same
  });

  it('should create a shallow clone of a map', () => {
    const map = new Map();
    map.set('key1', 'value1');
    map.set('key2', 'value2');

    const clonedMap = clone(map);

    expect(clonedMap).toBeInstanceOf(Map); // should be an instance of Map
    expect(clonedMap).toEqual(map); // values are equal
    expect(clonedMap).not.toBe(map); // map references are not the same
  });

  it('should create a shallow clone of a set', () => {
    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    const clonedSet = clone(set);

    expect(clonedSet).toBeInstanceOf(Set); // should be an instance of Set
    expect(clonedSet).toEqual(set); // values are equal
    expect(clonedSet).not.toBe(set); // set references are not the same
  });

  it('should return an empty object for uncloneable values', () => {
    const func = () => {};
    const error = new Error('error');
    const domNode = document.createElement('div');
    const weakMap = new WeakMap();

    const clonedFunc = clone(func);
    const clonedError = clone(error);
    const clonedDomNode = clone(domNode);
    const clonedWeakMap = clone(weakMap);

    expect(clonedFunc).toEqual({}); // empty object
    expect(clonedError).toEqual({}); // empty object
    expect(clonedDomNode).toEqual({}); // empty object
    expect(clonedWeakMap).toEqual({}); // empty object
  });
});
