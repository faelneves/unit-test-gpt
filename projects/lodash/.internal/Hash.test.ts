import Hash from "./Hash";

describe("Hash", () => {
  describe("constructor", () => {
    it("should create an empty hash when no entries are provided", () => {
      const hash = new Hash();
      expect(hash.size).toBe(0);
    });

    it("should create a hash and populate it with the provided entries", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);
      expect(hash.size).toBe(2);
      expect(hash.get("key1")).toBe("value1");
      expect(hash.get("key2")).toBe("value2");
    });
  });

  describe("clear", () => {
    it("should remove all entries from the hash", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      hash.clear();
      expect(hash.size).toBe(0);
      expect(hash.has("key1")).toBe(false);
      expect(hash.has("key2")).toBe(false);
    });
  });

  describe("delete", () => {
    it("should remove the entry with the specified key", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      hash.delete("key1");
      expect(hash.size).toBe(1);
      expect(hash.has("key1")).toBe(false);
      expect(hash.get("key1")).toBe(undefined);
      expect(hash.get("key2")).toBe("value2");
    });

    it("should return true if the entry was removed, false otherwise", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      const result = hash.delete("key1");
      expect(result).toBe(true);

      const result2 = hash.delete("invalidKey");
      expect(result2).toBe(false);
    });
  });

  describe("get", () => {
    it("should return the value associated with the specified key", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      const result = hash.get("key1");
      expect(result).toBe("value1");
    });

    it("should return undefined if the key does not exist in the hash", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      const result = hash.get("invalidKey");
      expect(result).toBe(undefined);
    });
  });

  describe("has", () => {
    it("should return true if the key exists in the hash", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      const result = hash.has("key1");
      expect(result).toBe(true);
    });

    it("should return false if the key does not exist in the hash", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);

      const result = hash.has("invalidKey");
      expect(result).toBe(false);
    });
  });

  describe("set", () => {
    it("should set the value associated with the specified key", () => {
      const hash = new Hash();
      hash.set("key1", "value1");

      expect(hash.size).toBe(1);
      expect(hash.get("key1")).toBe("value1");
      expect(hash.has("key1")).toBe(true);
    });

    it("should update the value if the key already exists in the hash", () => {
      const entries = [["key1", "value1"], ["key2", "value2"]];
      const hash = new Hash(entries);
      hash.set("key1", "updatedValue");

      expect(hash.size).toBe(2);
      expect(hash.get("key1")).toBe("updatedValue");
    });

    it("should handle setting the value as undefined", () => {
      const hash = new Hash();
      hash.set("key1", undefined);

      expect(hash.size).toBe(1);
      expect(hash.get("key1")).toBe(undefined);
    });

    it("should handle setting the value as HASH_UNDEFINED", () => {
      const hash = new Hash();
      hash.set("key1", HASH_UNDEFINED);

      expect(hash.size).toBe(1);
      expect(hash.get("key1")).toBe(undefined);
    });

    it("should return the hash instance", () => {
      const hash = new Hash();
      const result = hash.set("key1", "value1");

      expect(result).toBe(hash);
    });
  });
});
