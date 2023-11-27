import inRange from './inRange';

describe('inRange', () => {
  it('should return true if number is in the range (inclusive)', () => {
    expect(inRange(3, 2, 4)).toBeTruthy(); // number is in the range (2, 4)
    expect(inRange(4, 8)).toBeTruthy(); // number is in the range (0, 8)
    expect(inRange(1.2, 2)).toBeTruthy(); // number is in the range (0, 2)
    expect(inRange(-3, -2, -6)).toBeTruthy(); // number is in the range (-6, -2)
  });

  it('should return false if number is not in the range', () => {
    expect(inRange(4, 2)).toBeFalsy(); // number is not in the range (0, 2)
    expect(inRange(2, 2)).toBeFalsy(); // number is not in the range (0, 2)
    expect(inRange(5.2, 4)).toBeFalsy(); // number is not in the range (0, 4)
  });
});
