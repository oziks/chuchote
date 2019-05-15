export type logLevel = {
  name: string;
  value: number;
};

export const defineLogLevel = (name: string, value: number): logLevel => {
  return { value: value, name: name };
};

const Level = {
  INFO: defineLogLevel("INFO", 1),
  WARN: defineLogLevel("WARN", 2),
  ERROR: defineLogLevel("ERROR", 3),
  OFF: defineLogLevel("OFF", 99)
};

export default Level;
