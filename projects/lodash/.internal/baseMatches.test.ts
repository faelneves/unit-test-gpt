import baseMatches from './baseMatches';
import baseIsMatch from './baseIsMatch';
import getMatchData from './getMatchData';
import matchesStrictComparable from './matchesStrictComparable';

describe('baseMatches', () => {
  it('returns a function', () => {
    const source = { foo: 'bar' };
    const matcher = baseMatches(source);
    expect(typeof matcher).toBe('function');
  });

  it('returns true when given source and object are equal', () => {
    const source = { foo: 'bar' };
    const object = { foo: 'bar' };
    const matcher = baseMatches(source);
    expect(matcher(object)).toBe(true);
  });

  it('returns false when given source and object are not equal', () => {
    const source = { foo: 'bar' };
    const object = { foo: 'baz' };
    const matcher = baseMatches(source);
    expect(matcher(object)).toBe(false);
  });

  it('calls matchesStrictComparable when matchData length is 1 and has a strict comparison value', () => {
    const source = { foo: 'bar' };
    const matchData = [['foo', 'bar', true]];
    jest.spyOn(matchesStrictComparable, 'matchesStrictComparable');
    matchesStrictComparable.matchesStrictComparable.mockReturnValueOnce(true);
    const matcher = baseMatches(source);
    expect(matcher({ foo: 'bar' })).toBe(true);
    expect(matchesStrictComparable.matchesStrictComparable).toHaveBeenCalledWith('foo', 'bar');
    matchesStrictComparable.matchesStrictComparable.mockRestore();
  });

  it('calls baseIsMatch when matchData length is not 1 or does not have a strict comparison value', () => {
    const source = { foo: 'bar' };
    const matchData = [['foo', 'bar', false]];
    jest.spyOn(baseIsMatch, 'baseIsMatch');
    baseIsMatch.baseIsMatch.mockReturnValueOnce(true);
    const matcher = baseMatches(source);
    expect(matcher({ foo: 'bar' })).toBe(true);
    expect(baseIsMatch.baseIsMatch).toHaveBeenCalledWith({ foo: 'bar' }, source, matchData);
    baseIsMatch.baseIsMatch.mockRestore();
  });
});
