import { combineReducers } from "redux";
import recentStocksReducer from "../containers/recentStocksList/reducer.js";

const allReducers = combineReducers({ recentStocks: recentStocksReducer });

export default allReducers;
