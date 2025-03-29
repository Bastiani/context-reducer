import { useReducer, ReactNode } from "react";

import { counterReducer, initialState } from "./reducer";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
