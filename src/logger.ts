import Level, { logLevel } from "./level";

export type loggerContext = {
  filterLevel: logLevel;
  handler: { (...x: any[]): void };
};

class Logger {
  context: loggerContext;

  constructor(defaultContext?: loggerContext) {
    this.context = {
      filterLevel: Level.OFF,
      handler: console.log,
      ...defaultContext
    };
  }

  setLogLevel(level: logLevel): void {
    this.context.filterLevel = level;
  }

  getLogLevel(): logLevel {
    return this.context.filterLevel;
  }

  enableFor(level: logLevel): boolean {
    return level.value >= this.context.filterLevel.value;
  }

  info(...x: any[]): void {
    this.invoke(Level.INFO, ...x);
  }

  warn(...x: any[]): void {
    this.invoke(Level.WARN, ...x);
  }

  error(...x: any[]): void {
    this.invoke(Level.ERROR, ...x);
  }

  invoke(level: logLevel, ...x: any[]): void {
    if (this.enableFor(level)) {
      this.context.handler(x, { ...this.context, level });
    }
  }
}

export default Logger;
