//import constants
import { ADD_STOCK, SUBTRACT_STOCK } from "./constants";

const recentStocksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STOCK:
      return [...state, action.payload];
    case SUBTRACT_STOCK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default recentStocksReducer;
