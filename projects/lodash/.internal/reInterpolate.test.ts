import reInterpolate from './reInterpolate';

describe('reInterpolate', () => {
  it('should match template delimiters', () => {
    const input = 'Lorem ipsum <%= dolor %> sit amet <%= consectetur %> adipiscing <%= elit %>.';
    const expectedMatches = ['dolor', 'consectetur', 'elit'];

    const matches = input.match(reInterpolate);

    expect(matches).toEqual(expectedMatches);
  });

  it('should handle multiple occurrences of template delimiters', () => {
    const input = 'Hello <%= name %>! How are you <%= name %> today?';
    const expectedMatches = ['name', 'name'];

    const matches = input.match(reInterpolate);

    expect(matches).toEqual(expectedMatches);
  });

  it('should return an empty array when there are no matches', () => {
    const input = 'This is a normal text without any template delimiters.';

    const matches = input.match(reInterpolate);

    expect(matches).toEqual([]);
  });
});
