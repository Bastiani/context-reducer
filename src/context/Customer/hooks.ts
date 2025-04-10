import { useCallback, useContext } from "react";
import { CustomerContext } from "./context";
import { Customer } from "./types";

export const useCustomer = () => {
  const { state, dispatch } = useContext(CustomerContext);

  const setCustomer = useCallback(
    (customer: Customer) => {
      dispatch({ type: "SET_CUSTOMER", payload: customer });
    },
    [dispatch]
  );

  const removeCustomer = useCallback(
    (customerId: string) => {
      dispatch({ type: "REMOVE_CUSTOMER", payload: customerId });
    },
    [dispatch]
  );

  return { ...state, setCustomer, removeCustomer };
};
