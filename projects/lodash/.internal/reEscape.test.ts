import reEscape from './reEscape'

describe('reEscape', () => {
  it('should match template delimiters', () => {
    const template = '<%- someVariable %>'
    const matches = template.match(reEscape)
    expect(matches).toBeTruthy()
    expect(matches).toHaveLength(1)
    expect(matches![0]).toBe('<%- someVariable %>')
  })

  it('should match multiple template delimiters', () => {
    const template = '<%- someVariable %> <%- anotherVariable %>'
    const matches = template.match(reEscape)
    expect(matches).toBeTruthy()
    expect(matches).toHaveLength(2)
    expect(matches![0]).toBe('<%- someVariable %>')
    expect(matches![1]).toBe('<%- anotherVariable %>')
  })

  it('should not match template content without delimiters', () => {
    const template = 'This is a template'
    const matches = template.match(reEscape)
    expect(matches).toBeFalsy()
  })
})
