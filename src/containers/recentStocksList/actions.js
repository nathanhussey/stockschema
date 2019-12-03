import { ADD_STOCK, SUBTRACT_STOCK } from "./constants";

export const setRecentStocksReducer = text => ({
  type: ADD_STOCK,
  payload: text
});

export const subtractRecentStock = text => ({
  type: SUBTRACT_STOCK,
  payload: text
});
