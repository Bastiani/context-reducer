import React, { useReducer, ReactNode } from "react";
import { custumerReducer, initialState } from "./reducer";
import { CustumerContext } from "./context";

export const CustumerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(custumerReducer, initialState);
  return (
    <CustumerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustumerContext.Provider>
  );
};
