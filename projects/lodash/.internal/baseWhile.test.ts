import baseWhile from './baseWhile'
import slice from '../slice'

describe('baseWhile', () => {
  describe('when called with an array, a predicate function, and no options', () => {
    it('should return a new array with elements taken from the beginning until the predicate returns false', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num < 3

      // Act
      const result = baseWhile(array, predicate)

      // Assert
      expect(result).toEqual([1, 2])
      expect(result).not.toBe(array)
    })

    it('should return an empty array if the predicate returns false for all elements', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num > 5

      // Act
      const result = baseWhile(array, predicate)

      // Assert
      expect(result).toEqual([])
      expect(result).not.toBe(array)
    })
  })

  describe('when called with an array, a predicate function, and the isDrop option set to true', () => {
    it('should return a new array with elements dropped from the beginning until the predicate returns false', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num < 3

      // Act
      const result = baseWhile(array, predicate, true)

      // Assert
      expect(result).toEqual([3, 4, 5])
      expect(result).not.toBe(array)
    })

    it('should return the original array if the predicate returns true for all elements', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num < 10

      // Act
      const result = baseWhile(array, predicate, true)

      // Assert
      expect(result).toEqual(array)
      expect(result).toBe(array)
    })
  })

  describe('when called with an array, a predicate function, and the fromRight option set to true', () => {
    it('should return a new array with elements taken from the end until the predicate returns false', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num > 3

      // Act
      const result = baseWhile(array, predicate, false, true)

      // Assert
      expect(result).toEqual([4, 5])
      expect(result).not.toBe(array)
    })

    it('should return the original array if the predicate returns true for all elements', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num < 10

      // Act
      const result = baseWhile(array, predicate, false, true)

      // Assert
      expect(result).toEqual(array)
      expect(result).toBe(array)
    })
  })

  describe('when called with an array, a predicate function, the isDrop option set to true, and the fromRight option set to true', () => {
    it('should return a new array with elements dropped from the end until the predicate returns false', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num > 3

      // Act
      const result = baseWhile(array, predicate, true, true)

      // Assert
      expect(result).toEqual([1, 2, 3])
      expect(result).not.toBe(array)
    })

    it('should return the original array if the predicate returns true for all elements', () => {
      // Arrange
      const array = [1, 2, 3, 4, 5]
      const predicate = (num) => num < 10

      // Act
      const result = baseWhile(array, predicate, true, true)

      // Assert
      expect(result).toEqual(array)
      expect(result).toBe(array)
    })
  })

  // Tests for scenarios where `isDrop` is not provided and `fromRight` is not provided are omitted.
})
