import React, { useState, useEffect } from "react";
import StockCardList from "../../components/stockCardList/StockCardList";
import NavBar from "../../components/navBar/NavBar";
import styled from "styled-components";
import Scroll from "../../components/scroll/Scroll";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 84em;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 14px;
  width: 20em;
  margin: 0px 10px 0px 10px;
`;
const LgSubTitle = styled.h2`
  font-size: 12px;
  width: 10em;
  margin: 0px 10px 0px 10px;
`;
const SubTitle = styled.h2`
  font-size: 12px;
  width: 5em;
  margin: 0px 10px 0px 10px;
`;

const Graph = styled.h2`
  text-align: left;
  font-size: 12px;
  width: 110px;
  margin: 0px 10px 0px 10px;
`;

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
        setStockList(arrayOfData);
      });
  }, []);
  console.log(stockList);
  return (
    <div>
      <Wrapper>
        <Scroll>
          <FeatureList>
            <Title>Company</Title>
            <LgSubTitle>Market Cap</LgSubTitle>
            <SubTitle>Price</SubTitle>
            <LgSubTitle>Volume(24h)</LgSubTitle>
            <LgSubTitle>Change(24h)</LgSubTitle>
            <Graph>Graph(7d)</Graph>
          </FeatureList>
          <StockCardList stockList={stockList} />
        </Scroll>
      </Wrapper>
    </div>
  );
};

export default Homepage;
