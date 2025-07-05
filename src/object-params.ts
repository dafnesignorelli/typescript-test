type ParamsType = {
  first: number;
  second: number;
};

export const addTwoNumbers = (params: ParamsType) => {
  return params.first + params.second;
};
