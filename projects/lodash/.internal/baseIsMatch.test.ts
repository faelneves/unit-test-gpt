import Stack from './Stack'
import baseIsEqual from './baseIsEqual'

describe('baseIsMatch', () => {
  it('should return true when object is null and no matchData', () => {
    const object = null
    const source = {}
    const matchData = []
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(true)
  })

  it('should return false when object is null and has matchData', () => {
    const object = null
    const source = {}
    const matchData = [['a', 'foo']]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(false)
  })

  it('should return false when object property does not match', () => {
    const object = { a: 'bar' }
    const source = {}
    const matchData = [['a', 'foo']]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(false)
  })

  it('should return true when object property match', () => {
    const object = { a: 'foo' }
    const source = {}
    const matchData = [['a', 'foo']]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(true)
  })

  it('should return false when object property is undefined', () => {
    const object = {}
    const source = {}
    const matchData = [['a', 'foo', true]]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(false)
  })

  it('should return true when object property is undefined and has customizer', () => {
    const object = {}
    const source = {}
    const matchData = [['a', 'foo', true]]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(true)
  })

  it('should return true when customizer returns true', () => {
    const object = { a: 'foo' }
    const source = {}
    const matchData = [['a', 'foo', false]]
    const customizer = () => true

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(true)
  })

  it('should return false when customizer returns false', () => {
    const object = { a: 'foo' }
    const source = {}
    const matchData = [['a', 'foo', false]]
    const customizer = () => false

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(false)
  })

  it('should return true when customizer returns undefined and values are equal', () => {
    const object = { a: 'foo' }
    const source = {}
    const matchData = [['a', 'foo', false]]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(true)
  })

  it('should return true when customizer returns undefined and values are not equal', () => {
    const object = { a: 'foo' }
    const source = {}
    const matchData = [['a', 'bar', false]]
    const customizer = () => {}

    expect(baseIsMatch(object, source, matchData, customizer)).toBe(true)
  })
})
