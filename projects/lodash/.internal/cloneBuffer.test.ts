import cloneBuffer from './cloneBuffer'

describe('cloneBuffer', () => {
  it('should clone the buffer', () => {
    const buffer = Buffer.from('Hello, World!')
    const clonedBuffer = cloneBuffer(buffer)

    expect(clonedBuffer).toBeInstanceOf(Buffer)
    expect(clonedBuffer).not.toBe(buffer)
    expect(clonedBuffer).toEqual(buffer)
  })

  it('should clone the buffer deeply', () => {
    const buffer = Buffer.from('Hello, World!')
    const clonedBuffer = cloneBuffer(buffer, true)

    expect(clonedBuffer).toBeInstanceOf(Buffer)
    expect(clonedBuffer).not.toBe(buffer)
    expect(clonedBuffer).toEqual(buffer)
  })
})
