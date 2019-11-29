import React from "react";
import { useSelector } from "react-redux";

const RecentStocks = () => {
  const recentStocks = useSelector(state => state.recentStocks);
  console.log(recentStocks);
  return <div>{recentStocks[0].name}</div>;
};

export default RecentStocks;
