import { Equal, Expect } from "./helpers/type-utils";

const createUser = (id: string) => {
    return {
      id,
      name: "John Doe",
      email: "example@email.com",
    };
  };
  
  type User = ReturnType<typeof createUser>;
  
  type test = Expect<
    Equal<
      User,
      {
        id: string;
        name: string;
        email: string;
      }
    >
  >;
  