import {
  LOAD_ORDERS_FAILURE,
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS,
} from "../types";

export const ordersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: payload,
      };
    case LOAD_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default: {
      return state;
    }
  }
};
