import { createContext } from "react";
import { CounterState, CounterAction } from "./types";

export const CounterContext = createContext<
  | {
      state: CounterState;
      dispatch: React.Dispatch<CounterAction>;
    }
  | undefined
>(undefined);
