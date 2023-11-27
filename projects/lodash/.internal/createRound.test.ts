import createRound from './createRound';

describe('createRound', () => {
  it('returns a function', async () => {
    const round = createRound('round');
    expect(typeof round).toBe('function');
  });

  it('returns rounded number with precision', () => {
    const round = createRound('round');
    const rounded = round(15.4321, 2);
    expect(rounded).toBe(15.43);
  });

  it('returns rounded number without precision', () => {
    const round = createRound('round');
    const rounded = round(15.4321);
    expect(rounded).toBe(15);
  });

  it('returns rounded number with negative precision', () => {
    const round = createRound('round');
    const rounded = round(12345.6789, -3);
    expect(rounded).toBe(12000);
  });
});
