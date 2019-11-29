import { combineReducers } from "redux";
import recentStocksReducer from "../containers/recentStocks/reducer.js";

const allReducers = combineReducers({ recentStocks: recentStocksReducer });

export default allReducers;
