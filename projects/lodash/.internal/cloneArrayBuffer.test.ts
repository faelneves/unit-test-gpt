import cloneArrayBuffer from './cloneArrayBuffer'

describe('cloneArrayBuffer', () => {
  it('should clone an array buffer', () => {
    const originalArrayBuffer = new ArrayBuffer(4)
    const originalUint8Array = new Uint8Array(originalArrayBuffer)
    originalUint8Array[0] = 1
    originalUint8Array[1] = 2
    originalUint8Array[2] = 3
    originalUint8Array[3] = 4

    const clonedArrayBuffer = cloneArrayBuffer(originalArrayBuffer)
    const clonedUint8Array = new Uint8Array(clonedArrayBuffer)

    expect(clonedArrayBuffer).not.toBe(originalArrayBuffer) // check if it's a clone
    expect(clonedUint8Array.length).toBe(originalUint8Array.length)
    expect(clonedUint8Array[0]).toBe(originalUint8Array[0])
    expect(clonedUint8Array[1]).toBe(originalUint8Array[1])
    expect(clonedUint8Array[2]).toBe(originalUint8Array[2])
    expect(clonedUint8Array[3]).toBe(originalUint8Array[3])
  })
})
