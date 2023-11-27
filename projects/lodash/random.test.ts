import random from './random';

describe('random', () => {
  it('should return a random number between the lower and upper bounds', () => {
    const lower = 0;
    const upper = 5;
    const result = random(lower, upper);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should return a random number between 0 and the given number if only one argument is provided', () => {
    const upper = 5;
    const result = random(upper);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should return a floating-point number between the lower and upper bounds if `floating` is true', () => {
    const lower = 1.2;
    const upper = 5.2;
    const result = random(lower, upper, true);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(false);
  });

  it('should return a floating-point number between 0 and the given number if `floating` is true and only one argument is provided', () => {
    const upper = 5;
    const result = random(upper, true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(false);
  });

  it('should return a random number between 0 and 1 if no arguments are provided', () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
    expect(Number.isInteger(result)).toBe(false);
  });

  it('should handle negative bounds correctly', () => {
    const lower = -5;
    const upper = -1;
    const result = random(lower, upper);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should handle negative and positive bounds correctly', () => {
    const lower = -5.5;
    const upper = 5.5;
    const result = random(lower, upper, true);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(false);
  });

  it('should handle the case when upper and lower bounds are equal', () => {
    const lower = 5;
    const upper = 5;
    const result = random(lower, upper);
    expect(result).toBe(lower);
  });

  it('should handle the case when upper and lower bounds are floats and equal', () => {
    const lower = 1.2;
    const upper = 1.2;
    const result = random(lower, upper, true);
    expect(result).toBe(lower);
  });
});
