import React, { useState, useEffect } from "react";
import StockCardList from "../../components/stockCardList/StockCardList";

const Homepage = () => {
  const [stockList, setStockList] = useState([]);
  //fetch company logo, company info, key stats and price
  useEffect(() => {
    const tickers = [
      "aapl",
      "fb",
      "GOOGL",
      "tsla",
      "MSFT",
      "AMZN",
      "BRK.A",
      "BABA",
      "JPM",
      "XOM",
      "BAC",
      "WMT",
      "WFC",
      "V",
      "PG",
      "BUD",
      "T",
      "CVX",
      "UNH",
      "PFE"
    ];
    fetch(
      `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=logo,price,company,stats,volume-by-venue,chart&range=5d&token=${process.env.REACT_APP_IEX_TOKEN}`
    )
      .then(response => response.json())
      .then(data => {
        const arrayOfData = Object.entries(data).map(e => {
          return e[1];
        });
        console.log(arrayOfData);
        setStockList(arrayOfData);
      });
  }, []);

  return (
    <div>
      <StockCardList stockList={stockList} />
    </div>
  );
};

export default Homepage;
