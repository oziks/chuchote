import { createLogger } from "./chuchote";
import Logger from "./logger";

describe("Chuchote spec", () => {
  it("call createLogger returns new logger", () => {
    const log = createLogger();
    expect(log).toBeInstanceOf(Logger);
  });
});
