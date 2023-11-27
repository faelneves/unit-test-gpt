import isObjectLike from './isObjectLike';

describe('isObjectLike', () => {
  it('should return true if value is an object', () => {
    expect(isObjectLike({})).toBeTruthy();
    expect(isObjectLike([])).toBeTruthy();
    expect(isObjectLike(new Map())).toBeTruthy();
    expect(isObjectLike(new Set())).toBeTruthy();
    expect(isObjectLike(new Date())).toBeTruthy();
    expect(isObjectLike(Object())).toBeTruthy();
  });

  it('should return false if value is null or not object-like', () => {
    expect(isObjectLike(null)).toBeFalsy();
    expect(isObjectLike(undefined)).toBeFalsy();
    expect(isObjectLike(123)).toBeFalsy();
    expect(isObjectLike('hello')).toBeFalsy();
    expect(isObjectLike(true)).toBeFalsy();
    expect(isObjectLike(function () {})).toBeFalsy();
    expect(isObjectLike(Symbol())).toBeFalsy();
  });
});
