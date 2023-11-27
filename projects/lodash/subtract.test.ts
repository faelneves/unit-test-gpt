import subtract from './subtract';

describe('subtract', () => {
  it('should subtract two numbers and return the difference', () => {
    expect(subtract(6, 4)).toBe(2);
  });

  it('should subtract two negative numbers and return the negative difference', () => {
    expect(subtract(-6, -4)).toBe(-2);
  });

  it('should subtract a positive and a negative number and return the sum', () => {
    expect(subtract(6, -4)).toBe(10);
  });

  it('should subtract a negative and a positive number and return the negative sum', () => {
    expect(subtract(-6, 4)).toBe(-10);
  });

  it('should subtract zero from a number and return the number', () => {
    expect(subtract(6, 0)).toBe(6);
  });

  it('should subtract zero from zero and return zero', () => {
    expect(subtract(0, 0)).toBe(0);
  });
});
