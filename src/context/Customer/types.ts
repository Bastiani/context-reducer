export type Customer = {
  id: string;
  name: string;
  email: string;
};

export type CustomerState = {
  customer: Customer | null;
  customers: Customer[];
  loading: boolean;
  error: string | null;
};

export type CustomerAction =
  | {
      type: "SET_CUSTOMER";
      payload: Customer;
    }
  | {
      type: "SET_CUSTOMERS";
      payload: Customer[];
    }
  | {
      type: "SET_LOADING";
      payload: boolean;
    }
  | {
      type: "SET_ERROR";
      payload: string | null;
    }
  | {
      type: "REMOVE_CUSTOMER";
      payload: string;
    };
