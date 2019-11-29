import { ADD_STOCK } from "./constants";

export const setRecentStocksReducer = text => ({
  type: ADD_STOCK,
  payload: text
});
