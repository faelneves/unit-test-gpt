import deburrLetter from './deburrLetter';

describe('deburrLetter', () => {
  it('should return deburred letter', () => {
    expect(deburrLetter('\xc0')).toBe('A');
    expect(deburrLetter('\xc1')).toBe('A');
    expect(deburrLetter('\xc2')).toBe('A');
    // ...
    expect(deburrLetter('\u0167')).toBe('t');
    expect(deburrLetter('\u0168')).toBe('U');
    expect(deburrLetter('\u0169')).toBe('u');
    expect(deburrLetter('\u017f')).toBe('s');
    // additional edge cases
    expect(deburrLetter('\uD834\uDF06')).toBe('a');
    expect(deburrLetter('\uD835\uDC00')).toBe('h');
    expect(deburrLetter('\uD835\uDC34')).toBe('y');
  });
});
