import flatMapDepth from './flatMapDepth';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('flatMapDepth', () => {
  it('should flatten the array with depth 1', () => {
    const collection = [1, 2, 3];
    const iteratee = (num) => [num, num];
    const depth = 1;

    const result = flatMapDepth(collection, iteratee, depth);

    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should flatten the array with depth 2', () => {
    const collection = [1, 2, 3];
    const iteratee = (num) => [[[num, num]]];
    const depth = 2;

    const result = flatMapDepth(collection, iteratee, depth);

    expect(result).toEqual([[1, 1], [2, 2], [3, 3]]);
  });

  it('should flatten the object with depth 1', () => {
    const collection = { a: 1, b: 2, c: 3 };
    const iteratee = (num) => [num, num];
    const depth = 1;

    const result = flatMapDepth(collection, iteratee, depth);

    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should flatten the object with depth 2', () => {
    const collection = { a: 1, b: 2, c: 3 };
    const iteratee = (num) => [[[num, num]]];
    const depth = 2;

    const result = flatMapDepth(collection, iteratee, depth);

    expect(result).toEqual([[1, 1], [2, 2], [3, 3]]);
  });
});
