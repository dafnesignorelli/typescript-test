import { expect, it } from "vitest";
import { tryCatchDemo } from "../src/catchBlocks";

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
