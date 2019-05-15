import { defineLogLevel } from "./level";

describe("Level spec", () => {
  describe("defineLogLevel", () => {
    it("returns logLevel object", () => {
      expect(defineLogLevel("FOO", 3)).toEqual({
        name: "FOO",
        value: 3
      });
    });
  });
});
