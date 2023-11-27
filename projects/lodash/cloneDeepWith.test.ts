import cloneDeepWith from './cloneDeepWith';

describe('cloneDeepWith', () => {
  it('should deep clone an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = cloneDeepWith(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  it('should deep clone an array', () => {
    const arr = [1, [2, 3]];
    const clonedArr = cloneDeepWith(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
  });

  it('should deep clone an object with customizer', () => {
    const obj = { a: 1, b: { c: 2 } };
    const customizer = (value) => {
      if (typeof value === 'object' && value !== null) {
        return Object.assign({}, value);
      }
    };
    const clonedObj = cloneDeepWith(obj, customizer);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
  });

  it('should deep clone an array with customizer', () => {
    const arr = [1, [2, 3]];
    const customizer = (value) => {
      if (Array.isArray(value)) {
        return value.map((item) => item);
      }
    };
    const clonedArr = cloneDeepWith(arr, customizer);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
  });
});
