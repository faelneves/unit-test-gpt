import reEvaluate from './reEvaluate';

describe('reEvaluate', () => {
  it('should match template delimiters', () => {
    const template = '<% 1 + 1 %>';
    const matches = template.match(reEvaluate);
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(1);
  });

  it('should match multiple template delimiters', () => {
    const template = '<% 1 + 1 %> <% 2 + 2 %> <% 3 + 3 %>';
    const matches = template.match(reEvaluate);
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(3);
  });

  it('should match template delimiters with special characters', () => {
    const template = '<% 1 + 1 %> <% 2 * 3 %> <% @#$%^&*() %>';
    const matches = template.match(reEvaluate);
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(3);
  });

  it('should not match template delimiters with whitespace', () => {
    const template = '<%   %>';
    const matches = template.match(reEvaluate);
    expect(matches).toBeNull();
  });

  it('should not match empty template', () => {
    const template = '';
    const matches = template.match(reEvaluate);
    expect(matches).toBeNull();
  });
});
