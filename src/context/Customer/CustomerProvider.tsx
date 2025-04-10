import React, { useReducer, ReactNode } from "react";
import { customerReducer, initialState } from "./reducer";
import { CustomerContext } from "./context";

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(customerReducer, initialState);
  return (
    <CustomerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomerContext.Provider>
  );
};
