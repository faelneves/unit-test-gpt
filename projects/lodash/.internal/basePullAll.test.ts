import basePullAll from './basePullAll';
import baseIndexOf from './baseIndexOf';
import baseIndexOfWith from './baseIndexOfWith';
import copyArray from './copyArray';
import map from '../map';

describe('basePullAll', () => {
  it('should remove values from array', () => {
    const array = [1, 2, 3, 4, 5];
    const values = [2, 4];
    const result = basePullAll(array, values);

    expect(result).toEqual([1, 3, 5]);
  });

  it('should remove values from array based on iteratee', () => {
    const array = ['apple', 'banana', 'peach', 'orange'];
    const values = ['ana', 'ea'];
    const iteratee = (value) => value.slice(1, -1);
    const result = basePullAll(array, values, iteratee);

    expect(result).toEqual(['peach', 'orange']);
  });

  it('should remove values from array using a comparator function', () => {
    const array = ['apple', 'banana', 'peach', 'orange'];
    const values = ['Apple', 'Orange'];
    const comparator = (value1, value2) =>
      value1.toLowerCase() === value2.toLowerCase();
    const result = basePullAll(array, values, undefined, comparator);

    expect(result).toEqual(['banana', 'peach']);
  });

  it('should remove values from array using a custom comparator function', () => {
    const array = ['apple', 'banana', 'peach', 'orange'];
    const values = ['APPLE', 'ORANGE'];
    const comparator = (value1, value2) => value1 === value2.toUpperCase();
    const result = basePullAll(array, values, undefined, comparator);

    expect(result).toEqual(['banana', 'peach']);
  });
});
