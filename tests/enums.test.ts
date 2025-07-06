import { expect, it, vi } from "vitest";
import { log, LogLevel } from "../src/enums";

it("Should log if the level is higher than the global log level", () => {
  const consoleLog = vi.spyOn(console, "log");
  log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.ERROR,
    message: "Hello!",
  });

  expect(consoleLog).toHaveBeenCalledWith("Hello!");
});

it("Should log if the level is equal to the global log level", () => {
  const consoleLog = vi.spyOn(console, "log");
  log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.INFO,
    message: "Hello!",
  });

  expect(consoleLog).toHaveBeenCalledWith("Hello!");
});

it("Should not log if the level is lower than the global log level", () => {
  const consoleLog = vi.spyOn(console, "log");
  log({
    globalLogLevel: LogLevel.INFO,
    level: LogLevel.DEBUG,
    message: "Hello!",
  });

  expect(consoleLog).not.toHaveBeenCalled();
});

it("Should give you a TS error if you pass an invalid log level", () => {
  log({
    globalLogLevel: LogLevel.INFO,
    // @ts-expect-error
    level: 123,
    message: "Hello!",
  });
});
