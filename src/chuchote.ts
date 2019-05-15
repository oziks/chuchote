import Logger, { loggerContext } from "./logger";

export { default as logLevel } from "./level";

export const createLogger = (defaultContext?: loggerContext) => {
  return new Logger(defaultContext);
};
