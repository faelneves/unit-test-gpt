import cloneDeep from './cloneDeep';

describe('cloneDeep', () => {
  it('should return a deep cloned value', () => {
    const obj = {
      a: 1,
      b: { c: [2, 3, { d: 4 }], e: { f: 5 } },
    };

    const clonedObj = cloneDeep(obj);
    
    expect(clonedObj).toEqual(obj); // the cloned object should have the same value as the original object
    expect(clonedObj).not.toBe(obj); // the cloned object should not be the same object reference as the original object
    
    expect(clonedObj.b).toEqual(obj.b); // nested objects should have the same value
    expect(clonedObj.b).not.toBe(obj.b); // nested objects should not be the same object reference
    
    expect(clonedObj.b.c).toEqual(obj.b.c); // nested arrays should have the same value
    expect(clonedObj.b.c).not.toBe(obj.b.c); // nested arrays should not be the same object reference
    
    expect(clonedObj.b.c[2]).toEqual(obj.b.c[2]); // nested objects inside arrays should have the same value
    expect(clonedObj.b.c[2]).not.toBe(obj.b.c[2]); // nested objects inside arrays should not be the same object reference
    
    expect(clonedObj.b.e).toEqual(obj.b.e); // nested objects should have the same value
    expect(clonedObj.b.e).not.toBe(obj.b.e); // nested objects should not be the same object reference
    
    expect(clonedObj.b.e.f).toEqual(obj.b.e.f); // deep nested objects should have the same value
    expect(clonedObj.b.e.f).not.toBe(obj.b.e.f); // deep nested objects should not be the same object reference
  });
});
