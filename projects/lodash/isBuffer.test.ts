import isBuffer from './isBuffer';

describe('isBuffer', () => {
  it('should return true for a Buffer object', () => {
    const buffer = Buffer.alloc(2);
    expect(isBuffer(buffer)).toBe(true);
  });

  it('should return false for a Uint8Array object', () => {
    const array = new Uint8Array(2);
    expect(isBuffer(array)).toBe(false);
  });

  it('should return false for a string', () => {
    const str = 'Hello, world!';
    expect(isBuffer(str)).toBe(false);
  });

  it('should return false for a number', () => {
    const num = 42;
    expect(isBuffer(num)).toBe(false);
  });

  it('should return false for an empty object', () => {
    const obj = {};
    expect(isBuffer(obj)).toBe(false);
  });

  it('should return false for null', () => {
    const value = null;
    expect(isBuffer(value)).toBe(false);
  });

  it('should return false for undefined', () => {
    const value = undefined;
    expect(isBuffer(value)).toBe(false);
  });
});
