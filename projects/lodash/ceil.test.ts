import ceil from './ceil';

describe('ceil', () => {
  it('should round up a number to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(6.004)).toBe(7);
    expect(ceil(6040)).toBe(6040);
  });

  it('should round up a number to the specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(6040, -2)).toBe(6100);
  });
});
