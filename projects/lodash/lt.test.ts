import lt from './lt';

describe('lt', () => {
  it('should return true when value is less than other', () => {
    expect(lt(1, 3)).toBe(true);
    expect(lt(-1, 0)).toBe(true);
    expect(lt('1', '10')).toBe(true);
    expect(lt([1], [2])).toBe(true);
    expect(lt({ a: 1 }, { a: 2 })).toBe(true);
  });

  it('should return false when value is not less than other', () => {
    expect(lt(3, 3)).toBe(false);
    expect(lt(10, 5)).toBe(false);
    expect(lt('10', '1')).toBe(false);
    expect(lt([3], [1])).toBe(false);
    expect(lt({ a: 3 }, { a: 0 })).toBe(false);
  });

  it('should handle string comparisons correctly', () => {
    expect(lt('10', '2')).toBe(false);
    expect(lt('2', '10')).toBe(true);
    expect(lt('10', '10')).toBe(false);
    expect(lt('a', 'b')).toBe(true);
    expect(lt('a', 'A')).toBe(false);
  });

  it('should handle NaN correctly', () => {
    expect(lt(NaN, NaN)).toBe(false);
    expect(lt(NaN, 1)).toBe(false);
    expect(lt(1, NaN)).toBe(false);
  });
});
