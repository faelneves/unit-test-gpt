import upperFirst from './upperFirst'

describe('upperFirst', () =>{
  it('should convert the first character of a string to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  it('should return an empty string if input is empty', () => {
    expect(upperFirst('')).toBe('');
  });
});
