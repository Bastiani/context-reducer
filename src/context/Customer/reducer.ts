import { Customer, CustomerAction, CustomerState } from "./types";

export const initialState = {
  customer: null,
  customers: [],
  loading: false,
  error: "",
};

export const customerReducer = (
  state: CustomerState,
  action: CustomerAction
) => {
  switch (action.type) {
    case "SET_CUSTOMER":
      return {
        ...state,
        customer: { ...action.payload, id: crypto.randomUUID() } as Customer,
      };
    case "SET_CUSTOMERS":
      return {
        ...state,
        customers: [...state.customers, action.payload] as Customer[],
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customers: (state.customers ?? []).filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
