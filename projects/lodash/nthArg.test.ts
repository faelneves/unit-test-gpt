import nthArg from './nthArg';

describe('nthArg', () => {
  it('should return the argument at index n', () => {
    const func = nthArg(1);
    expect(func('a', 'b', 'c', 'd')).toBe('b');

    const func = nthArg(-2);
    expect(func('a', 'b', 'c', 'd')).toBe('c');
  });

  it('should return undefined for out of bounds index values', () => {
    const func = nthArg(10);
    expect(func('a', 'b', 'c', 'd')).toBeUndefined();

    const func = nthArg(-5);
    expect(func('a', 'b', 'c', 'd')).toBeUndefined();
  });

  it('should handle empty argument list', () => {
    const func = nthArg(0);
    expect(func()).toBeUndefined();
  });

  it('should handle no arguments passed to the generated function', () => {
    const func = nthArg(0);
    expect(func()).toBeUndefined();
  });
});
