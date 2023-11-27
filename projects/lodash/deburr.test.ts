import deburr from './deburr';

describe('deburr', () => {
  it('should deburr the string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and remove combining diacritical marks', () => {
    expect(deburr('déjà vu')).toBe('deja vu');
    expect(deburr('åßö')).toBe('asso');
    expect(deburr('łódź')).toBe('lodz');
    expect(deburr('ñ')).toBe('n');
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(deburr('')).toBe('');
  });

  it('should return the same string if there are no Latin-1 Supplement or Latin Extended-A letters and no combining diacritical marks', () => {
    expect(deburr('hello')).toBe('hello');
    expect(deburr('123')).toBe('123');
    expect(deburr('!@#$%^&*()_+-=')).toBe('!@#$%^&*()_+-=');
    expect(deburr('😊')).toBe('😊');
  });
});
