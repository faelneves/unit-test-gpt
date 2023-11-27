import unicodeSize from "./unicodeSize";

describe("unicodeSize", () => {
  it("should return the correct size of a Unicode string", () => {
    const unicodeString = "Hello, 世界"
    const size = unicodeSize(unicodeString)
    expect(size).toBe(9)
  })

  it("should handle empty strings", () => {
    const emptyString = ""
    const size = unicodeSize(emptyString)
    expect(size).toBe(0)
  })

  it("should handle strings with no Unicode characters", () => {
    const asciiString = "Hello, world!"
    const size = unicodeSize(asciiString)
    expect(size).toBe(13)
  })

  // Add more test cases to cover edge cases and corner cases
})
