import React from "react";
import StockCard from "../stockCard/StockCard";

const StockCardList = ({ stockList }) => {
  const calculatePriceChange = (currentPrice, closePrice) => {
    let priceChange = ((currentPrice - closePrice) / closePrice) * 100;
    let roundedPriceChange = Math.round(priceChange * 100) / 100;
    let priceChangePercentage = `${roundedPriceChange}%`;
    return priceChangePercentage;
  };
  const createChartData = chartArray => {
    let data = [];
    chartArray.forEach((element, i) => {
      data.push({ x: i, y: element.close });
    });
    return data;
  };

  const formatNum = num => {
    let arrayStr = num
      .toString()
      .split("")
      .reverse();
    let letterPosition = 0;
    const newArrayStr = arrayStr.map((letter, i) => {
      if (arrayStr.length - 1 === i) {
      } else if (letter === ".") {
        letterPosition = 0;
      } else if (letterPosition === 2) {
        letterPosition = 0;
        letter = `,${letter}`;
        return letter;
      } else {
        letterPosition += 1;
      }
      return letter;
    });
    let joinArrayStr = newArrayStr.reverse().join("");
    let newNum = `$${joinArrayStr}`;
    return newNum;
  };
  return (
    <div>
      {stockList.map((stock, i) => {
        return (
          <StockCard
            key={stock.company.symbol}
            logo={stock.logo}
            name={stock.company.companyName}
            marketCap={formatNum(stock.stats.marketcap)}
            price={formatNum(stock.price)}
            volume={formatNum(stock.chart[4].uVolume)}
            priceChange={calculatePriceChange(
              stock.price,
              stock.chart[4].close
            )}
            graph={createChartData(stock.chart)}
          />
        );
      })}
    </div>
  );
};

export default StockCardList;
