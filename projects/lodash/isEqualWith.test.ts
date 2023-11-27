import isEqualWith from './isEqualWith';

describe('isEqualWith', () => {
  it('should return true when comparing two equal values using a customizer function', () => {
    const customizer = (objValue, othValue) => {
      if (typeof objValue === 'number' && typeof othValue === 'number') {
        return objValue % 2 === 0 && othValue % 2 === 0;
      }
    };

    const result = isEqualWith(4, 6, customizer);

    expect(result).toBeTruthy();
  });

  it('should return false when comparing two different values using a customizer function', () => {
    const customizer = (objValue, othValue) => {
      if (typeof objValue === 'number' && typeof othValue === 'number') {
        return objValue % 2 === 0 && othValue % 2 === 0;
      }
    };

    const result = isEqualWith(3, 6, customizer);

    expect(result).toBeFalsy();
  });

  it('should use the base comparison logic when the customizer function returns undefined', () => {
    const customizer = (objValue, othValue) => undefined;

    const result = isEqualWith([1, 2, 3], [1, 2, 3], customizer);

    expect(result).toBeTruthy();
  });
});
