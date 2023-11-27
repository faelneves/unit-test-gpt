import multiply from './multiply';

describe('multiply', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 100)).toBe(0);
    expect(multiply(-5, 10)).toBe(-50);
    expect(multiply(1.5, 2)).toBe(3);
  });

  it('should handle edge cases', () => {
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(0, -100)).toBe(0);
    expect(multiply(-1, -1)).toBe(1);
  });
});
