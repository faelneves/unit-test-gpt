import cloneDataView from './cloneDataView'
import cloneArrayBuffer from './cloneArrayBuffer'

describe('cloneDataView', () => {
  it('should create a clone of a DataView object with a shallow clone', () => {
    const buffer = new ArrayBuffer(8)
    const view = new DataView(buffer)
    
    const clone = cloneDataView(view)

    expect(clone).not.toBe(view)
    expect(clone.buffer).toBe(view.buffer)
    expect(clone.byteOffset).toBe(view.byteOffset)
    expect(clone.byteLength).toBe(view.byteLength)
  })
  
  it('should create a clone of a DataView object with a deep clone', () => {
    const buffer = new ArrayBuffer(8)
    const view = new DataView(buffer)
    
    const clone = cloneDataView(view, true)

    expect(clone).not.toBe(view)
    expect(clone.buffer).not.toBe(view.buffer)
    expect(clone.byteOffset).toBe(view.byteOffset)
    expect(clone.byteLength).toBe(view.byteLength)
  })
})
