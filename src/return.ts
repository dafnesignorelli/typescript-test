interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

export const makeUser = (): User => {
  const newUser: User = {
    id: 1,
    firstName: "firstName",
    lastName: "lastName",
    role: "admin",
    posts: [{ id: 1, title: "title" }],
  };
  return newUser;
};
