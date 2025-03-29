export type Custumer = {
  name: string;
  email: string;
};

export type CustumerState = {
  custumer: Custumer | null;
};

export type CustumerAction = {
  type: "SET_CUSTUMER";
  payload: Custumer;
};
