import unionBy from './unionBy';
import { expect } from 'chai';
import { screen } from '@testing-library/dom';

describe('unionBy', () => {
  it('should combine arrays and remove duplicates based on iteratee function', () => {
    const arr1 = [2.1, 3.2, 4.3, 5.4];
    const arr2 = [1.2, 2.3, 3.4];
    const result = unionBy(arr1, arr2, Math.floor);
    expect(result).to.eql([2.1, 3.2, 4.3, 5.4, 1.2]);
  });

  it('should return an empty array if no arrays are provided', () => {
    const result = unionBy();
    expect(result).to.eql([]);
  });

  it('should handle arrays with non-object elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const iteratee = (value) => value ** 2;
    const result = unionBy(arr1, arr2, iteratee);
    expect(result).to.eql([1, 2, 3, 4]);
  });
  
  it('should handle arrays with objects and iteratee function', () => {
    const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const arr2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
    const iteratee = (obj) => obj.id;
    const result = unionBy(arr1, arr2, iteratee);
    expect(result).to.eql([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  });
  
  it('should not modify the original arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const iteratee = (value) => value ** 2;
    const result = unionBy(arr1, arr2, iteratee);
    expect(arr1).to.eql([1, 2, 3]);
    expect(arr2).to.eql([2, 3, 4]);
  });
});
