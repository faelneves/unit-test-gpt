import merge from './merge';

describe('merge', () => {
  it('should merge two objects correctly', () => {
    const object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };

    const other = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };

    const result = merge(object, other);

    expect(result).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
  });

  it('should merge three objects correctly', () => {
    const object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };

    const other1 = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };

    const other2 = {
      'a': [{ 'f': 6 }, { 'g': 7 }]
    };

    const result = merge(object, other1, other2);

    expect(result).toEqual({ 'a': [{ 'b': 2, 'c': 3, 'f': 6 }, { 'd': 4, 'e': 5, 'g': 7 }] });
  });

  it('should skip undefined properties', () => {
    const object = {
      'a': 1,
      'b': undefined
    };

    const other = {
      'b': 2,
      'c': undefined
    };

    const result = merge(object, other);

    expect(result).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should merge arrays recursively', () => {
    const object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };

    const other = {
      'a': [{ 'c': 3 }, { 'd': 5 }]
    };

    const result = merge(object, other);

    expect(result).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 5 }] });
  });
});
