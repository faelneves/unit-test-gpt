import baseMerge from './baseMerge';
import isObject from '../isObject';
import { describe, expect, it } from '@jest/globals';
import { screen } from '@testing-library/dom';
import customDefaultsMerge from './customDefaultsMerge';

describe('customDefaultsMerge', () => {
  it('should merge source object into destination object', () => {
    const objValue = { a: 1, b: 2 };
    const srcValue = { b: 3, c: 4 };
    const key = 'key';
    const object = { key: objValue };
    const source = { key: srcValue };
    const stack = new Map();

    const result = customDefaultsMerge(objValue, srcValue, key, object, source, stack);

    expect(result).toEqual({ key: { a: 1, b: 3, c: 4 } });
  });

  it('should merge nested objects', () => {
    const objValue = { a: { b: 1, c: 2 } };
    const srcValue = { a: { b: 3, d: 4 } };
    const key = 'key';
    const object = { key: objValue };
    const source = { key: srcValue };
    const stack = new Map();

    const result = customDefaultsMerge(objValue, srcValue, key, object, source, stack);

    expect(result).toEqual({ key: { a: { b: 3, c: 2, d: 4 } } });
  });

  it('should merge array objects', () => {
    const objValue = [1, 2, 3];
    const srcValue = [4, 5];
    const key = 'key';
    const object = { key: objValue };
    const source = { key: srcValue };
    const stack = new Map();

    const result = customDefaultsMerge(objValue, srcValue, key, object, source, stack);

    expect(result).toEqual({ key: [4, 5, 3] });
  });

  it('should merge object and array', () => {
    const objValue = { a: [1, 2] };
    const srcValue = { a: [3, 4] };
    const key = 'key';
    const object = { key: objValue };
    const source = { key: srcValue };
    const stack = new Map();

    const result = customDefaultsMerge(objValue, srcValue, key, object, source, stack);

    expect(result).toEqual({ key: { a: [3, 4] } });
  });
});
