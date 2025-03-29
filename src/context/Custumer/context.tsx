import { createContext, Dispatch } from "react";
import { CustumerAction, CustumerState } from "./types";
import { initialState } from "./reducer";

export const CustumerContext = createContext<{
  state: CustumerState;
  dispatch: Dispatch<CustumerAction>;
}>({ state: initialState, dispatch: () => null });
