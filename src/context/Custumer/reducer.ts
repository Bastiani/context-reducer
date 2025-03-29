import { CustumerAction, CustumerState } from "./types";

export const initialState = {
  custumer: null,
};

export const custumerReducer = (
  state: CustumerState,
  action: CustumerAction
) => {
  switch (action.type) {
    case "SET_CUSTUMER":
      return { ...state, custumer: action.payload };
    default:
      return state;
  }
};
