import cloneTypedArray from './cloneTypedArray';
import cloneArrayBuffer from './cloneArrayBuffer';

describe('cloneTypedArray', () => {
  it('should clone the typed array', () => {
    const typedArray = new Int8Array([1, 2, 3]);
    const cloned = cloneTypedArray(typedArray);

    expect(cloned).toBeInstanceOf(Int8Array);
    expect(cloned).toEqual(typedArray);
    expect(cloned.buffer).not.toBe(typedArray.buffer);
  });

  it('should perform a deep clone if isDeep parameter is true', () => {
    const typedArray = new Int8Array([1, 2, 3]);
    const cloned = cloneTypedArray(typedArray, true);

    expect(cloned).toBeInstanceOf(Int8Array);
    expect(cloned).toEqual(typedArray);
    expect(cloned.buffer).not.toBe(typedArray.buffer);
    expect(cloned.buffer).not.toBe(cloneArrayBuffer(typedArray.buffer));
  });
});
