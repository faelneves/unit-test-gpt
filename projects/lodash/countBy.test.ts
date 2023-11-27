import countBy from './countBy';

describe('countBy', () => {
  it('should return an object with keys generated from the results of running iteratee on each element of the collection', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    
    expect(countBy(users, value => value.user)).toEqual({ 'barney': 1, 'betty': 1, 'fred': 1 });
  });

  it('should return an object with the count of keys returned by iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
  });

  it('should return an empty object if the collection is empty', () => {
    expect(countBy([], value => value)).toEqual({});
  });
});
