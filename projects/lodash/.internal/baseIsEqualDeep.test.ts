import baseIsEqualDeep from './baseIsEqualDeep';
import Stack from './Stack';
import equalArrays from './equalArrays';
import equalByTag from './equalByTag';
import equalObjects from './equalObjects';
import getTag from './getTag';
import isBuffer from '../isBuffer';
import isTypedArray from '../isTypedArray';

describe('baseIsEqualDeep', () => {
  it('should return true if objects are equivalent', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, b: 2};

    const result = baseIsEqualDeep(obj1, obj2, 0, () => true);

    expect(result).toBe(true);
  });

  it('should return false if objects are not equivalent', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 3, b: 4};

    const result = baseIsEqualDeep(obj1, obj2, 0, () => true);

    expect(result).toBe(false);
  });
});
