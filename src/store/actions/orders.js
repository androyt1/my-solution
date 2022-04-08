import {
  LOAD_ORDERS_FAILURE,
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS,
} from "../types";
import axios from "axios";

export const loadOrdersRequest = () => async (dispatch) => {
  dispatch({
    type: LOAD_ORDERS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      "https://frontendtest.huel.io/api/line-items",
      config
    );
    dispatch({
      type: LOAD_ORDERS_SUCCESS,
      payload: res.data.line_items,
    });
  } catch (error) {
    dispatch({
      type: LOAD_ORDERS_FAILURE,
      payload: error,
    });
  }
};
