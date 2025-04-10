import { createContext, Dispatch } from "react";
import { CustomerAction, CustomerState } from "./types";
import { initialState } from "./reducer";

export const CustomerContext = createContext<{
  state: CustomerState;
  dispatch: Dispatch<CustomerAction>;
}>({ state: initialState, dispatch: () => null });
