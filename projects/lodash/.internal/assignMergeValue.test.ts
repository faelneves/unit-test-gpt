import assignMergeValue from './assignMergeValue';
import baseAssignValue from './baseAssignValue';
import eq from '../eq';

describe('assignMergeValue', () => {
  it('should assign a value to the object for a key that does not exist', () => {
    const obj = {};
    assignMergeValue(obj, 'key', 'value');
    expect(obj).toEqual({ key: 'value' });
  });

  it('should assign a value to the object for a key that exists but the values are not equal', () => {
    const obj = { key: 'value1' };
    assignMergeValue(obj, 'key', 'value2');
    expect(obj).toEqual({ key: 'value2' });
  });

  it('should not assign a value to the object for a key that exists and the values are equal', () => {
    const obj = { key: 'value' };
    assignMergeValue(obj, 'key', 'value');
    expect(obj).toEqual({ key: 'value' });
  });

  it('should not assign undefined values to the object', () => {
    const obj = {};
    assignMergeValue(obj, 'key', undefined);
    expect(obj).toEqual({});
  });

  it('should assign undefined values to the object if the key does not exist', () => {
    const obj = {};
    assignMergeValue(obj, 'key', undefined);
    expect(obj).toEqual({ key: undefined });
  });

  it('should pass the object, key, and value to baseAssignValue', () => {
    const mockBaseAssignValue = jest.fn();
    const obj = {};
    const key = 'key';
    const value = 'value';
    jest.mock('./baseAssignValue', () => mockBaseAssignValue);
    assignMergeValue(obj, key, value);
    expect(mockBaseAssignValue).toHaveBeenCalledWith(obj, key, value);
  });
});
