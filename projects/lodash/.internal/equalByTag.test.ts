import equalByTag from './equalByTag';

describe('equalByTag', () => {
  it('should return true for equal boolean values', () => {
    const object = true;
    const other = true;
    const tag = '[object Boolean]';
    const bitmask = 0;
    const customizer = () => {};
    const equalFunc = () => {};
    const stack = new Map();

    const result = equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack);

    expect(result).toBe(true);
  });

  it('should return false for different boolean values', () => {
    const object = true;
    const other = false;
    const tag = '[object Boolean]';
    const bitmask = 0;
    const customizer = () => {};
    const equalFunc = () => {};
    const stack = new Map();

    const result = equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack);

    expect(result).toBe(false);
  });

  // Add more tests for other data types and scenarios
});
