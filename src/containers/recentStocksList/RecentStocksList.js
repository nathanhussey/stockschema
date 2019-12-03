import React from "react";
import { useSelector } from "react-redux";
import RecentStockCard from "../../components/recentStockCard/RecentStockCard";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 1.5em;
`;
const Title = styled.h1`
  font-size: 1.2em;
  margin: 0;
`;

const RecentStocksList = () => {
  const recentStocksList = useSelector(state => state.recentStocks);
  console.log(recentStocksList);
  return (
    <Wrapper>
      <Title>Most Recently Viewed</Title>
      {recentStocksList.map(stock => {
        return (
          <RecentStockCard
            key={stock.ticker}
            ticker={stock.ticker}
            name={stock.name}
          />
        );
      })}
    </Wrapper>
  );
};

export default RecentStocksList;
