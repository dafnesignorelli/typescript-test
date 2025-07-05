import { expect, it } from "vitest";
import { getUserId, defaultUser } from "../src/assigning-types";

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
