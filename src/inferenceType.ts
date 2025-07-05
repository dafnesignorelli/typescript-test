import { Equal, Expect } from "./helpers/type-utils";

const fetchData = async (): Promise<[Error |undefined, any? ]> => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")];
  }

  const data = await result.json();

  return [undefined, data];
};

const fetchData2 = async () => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")] as const;
  }

  const data = await result.json();

  return [undefined, data] as const;
};

const example = async () => {
  const [error, data] = await fetchData();
  const [error2, data2] = await fetchData2();

  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>,
    Expect<Equal<typeof data, any>>,
  ];

  type Tests2 = [
    Expect<Equal<typeof error2, Error | undefined>>,
    Expect<Equal<typeof data2, any>>,
  ];
};
