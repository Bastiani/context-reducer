import { useCallback, useContext } from "react";
import { CustumerContext } from "./context";
import { Custumer } from "./types";

export const useCustumer = () => {
  const { state, dispatch } = useContext(CustumerContext);

  const setCustumer = useCallback(
    (custumer: Custumer) => {
      dispatch({ type: "SET_CUSTUMER", payload: custumer });
    },
    [dispatch]
  );

  return { ...state, setCustumer };
};
