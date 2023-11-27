import baseSum from './.internal/baseSum';
import meanBy from './meanBy';

describe('meanBy', () => {
  it('should return the mean of an array of numbers', () => {
    const array = [4, 2, 8, 6];
    const iteratee = (value) => value;
    expect(meanBy(array, iteratee)).toBe(5);
  });

  it('should return NaN if the array is empty', () => {
    const array = [];
    const iteratee = (value) => value;
    expect(meanBy(array, iteratee)).toBe(NaN);
  });

  it('should return NaN if the array is null', () => {
    const array = null;
    const iteratee = (value) => value;
    expect(meanBy(array, iteratee)).toBe(NaN);
  });

  it('should return NaN if the array is undefined', () => {
    const array = undefined;
    const iteratee = (value) => value;
    expect(meanBy(array, iteratee)).toBe(NaN);
  });

  it('should return NaN if the array contains non-numeric values', () => {
    const array = [4, 2, '8', 6];
    const iteratee = (value) => value;
    expect(meanBy(array, iteratee)).toBe(NaN);
  });

  it('should handle custom iteratee functions', () => {
    const array = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
    const iteratee = ({ n }) => n;
    expect(meanBy(array, iteratee)).toBe(5);
  });
});
