import add from './add';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  it('should return the sum of zero and a number', () => {
    expect(add(0, 10)).toBe(10);
  });

  it('should return the sum of a number and zero', () => {
    expect(add(10, 0)).toBe(10);
  });

  it('should return zero when both numbers are zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  // Add more test cases for edge and corner cases
});
