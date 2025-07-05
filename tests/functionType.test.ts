import { expect, it } from "vitest";
import { createThenGetUser } from "../src/functionType";

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Matt",
      lastName: "Pocock",
    })
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Matt",
    lastName: "Pocock",
  });
});
