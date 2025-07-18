import { Equal, Expect } from "./helpers/type-utils";

const configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

type Environment = keyof typeof configurations;

type Configurations = typeof configurations;
type Configurations2 = keyof Configurations;

type test = Expect<
  Equal<Environment, "development" | "production" | "staging">
>;
