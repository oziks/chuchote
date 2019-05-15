import Logger from "./logger";
import Level from "./level";

describe("Logger spec", () => {
  describe("Logger with zero config", () => {
    const spyConsoleLog = jest.spyOn(console, "log");
    const loggerZeroConfig = new Logger();

    beforeEach(() => {
      spyConsoleLog.mockReset();
    });

    it("returns off level", () => {
      expect(loggerZeroConfig.getLogLevel()).toEqual({
        name: "OFF",
        value: 99
      });
    });

    it("info log handler is disabled", () => {
      expect(loggerZeroConfig.enableFor(Level.INFO)).toBeFalsy();
    });

    it("info function not invoke log handler", () => {
      loggerZeroConfig.info("arguments");
      expect(spyConsoleLog).not.toHaveBeenCalled();
    });

    it("warn log handler is disabled", () => {
      expect(loggerZeroConfig.enableFor(Level.WARN)).toBeFalsy();
    });

    it("warn function not invoke log handler", () => {
      loggerZeroConfig.warn("arguments");
      expect(spyConsoleLog).not.toHaveBeenCalled();
    });

    it("error log handler is disabled", () => {
      expect(loggerZeroConfig.enableFor(Level.ERROR)).toBeFalsy();
    });

    it("error function not invoke log handler", () => {
      loggerZeroConfig.error("arguments");
      expect(spyConsoleLog).not.toHaveBeenCalled();
    });
  });

  describe("Logger with custom config", () => {
    const spyCustomLog = jest.fn();
    const loggerCustomConfig = new Logger({
      filterLevel: Level.WARN,
      handler: (message, context) => {
        spyCustomLog(message, context.level.name, context.filterLevel.name);
      }
    });

    beforeEach(() => {
      spyCustomLog.mockReset();
    });

    it("returns warn level", () => {
      expect(loggerCustomConfig.getLogLevel()).toEqual({
        name: "WARN",
        value: 2
      });
    });

    it("info log handler is disabled", () => {
      expect(loggerCustomConfig.enableFor(Level.INFO)).toBeFalsy();
    });

    it("info function not invoke log handler", () => {
      loggerCustomConfig.info("arguments");
      expect(spyCustomLog).not.toHaveBeenCalled();
    });

    it("warn log handler is enabled", () => {
      expect(loggerCustomConfig.enableFor(Level.WARN)).toBeTruthy();
    });

    it("warn function invoke log handler", () => {
      loggerCustomConfig.warn("arguments");
      expect(spyCustomLog).toHaveBeenCalledWith(["arguments"], "WARN", "WARN");
    });

    it("error log handler is enabled", () => {
      expect(loggerCustomConfig.enableFor(Level.ERROR)).toBeTruthy();
    });

    it("error function invoke log handler", () => {
      loggerCustomConfig.error("arguments");
      expect(spyCustomLog).toHaveBeenCalledWith(["arguments"], "ERROR", "WARN");
    });

    it("update logger filterLevel", () => {
      loggerCustomConfig.setLogLevel(Level.INFO);
      expect(loggerCustomConfig.getLogLevel()).toEqual({
        name: "INFO",
        value: 1
      });
    });

    it("info log handler is enalbed", () => {
      expect(loggerCustomConfig.enableFor(Level.INFO)).toBeTruthy();
    });

    it("info function not invoke log handler", () => {
      loggerCustomConfig.info("arguments");
      expect(spyCustomLog).toHaveBeenCalledWith(["arguments"], "INFO", "INFO");
    });
  });
});
