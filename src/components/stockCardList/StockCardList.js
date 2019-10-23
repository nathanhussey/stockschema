import React from "react";
import StockCard from "../stockCard/StockCard";

const StockCardList = ({ stockList }) => {
  return (
    <div>
      {stockList.map((stock, i) => {
        return (
          <StockCard
            logo={stock.logo}
            name={stock.company.companyName}
            price={stock.price}
            marketCap={stock.stats.marketcap}
          />
        );
      })}
    </div>
  );
};

export default StockCardList;
