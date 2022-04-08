import { combineReducers } from "redux";
import { ordersReducer } from "./reducers/orders";

export const rootReducer = combineReducers({
  allOrders: ordersReducer,
});
