//import constants
import { ADD_STOCK } from "./constants";

const recentStocksReducer = (
  state = [{ ticker: "aapl", name: "Apple" }],
  action
) => {
  switch (action.type) {
    case ADD_STOCK:
      return;
    default:
      return state;
  }
};

export default recentStocksReducer;
