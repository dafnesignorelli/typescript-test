import { expect, it } from "vitest";
import { addTwoNumbers } from "../src/number-problem";

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
