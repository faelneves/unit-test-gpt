import round from './round';

describe('round', () => {
  it('should round a number without precision', () => {
    expect(round(4.006)).toBe(4);
  });

  it('should round a number with precision', () => {
    expect(round(4.006, 2)).toBe(4.01);
  });

  it('should round a number with negative precision', () => {
    expect(round(4060, -2)).toBe(4100);
  });
});
