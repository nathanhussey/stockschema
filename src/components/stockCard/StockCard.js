import React from "react";
import { XYPlot, LineSeries } from "react-vis";
import "./StockCard.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2em;
`;

const Title = styled.h1`
  font-size: 14px;
  margin: 1em;
  max-width: 5em;
`;

const SubTitle = styled.h2`
  font-size: 12px;
  margin: 1em;
  max-width: 3em;
`;

const Logo = styled.img`
  margin: 1em;
  max-width: 3em;
`;

const StockCard = ({
  logo,
  name,
  marketCap,
  price,
  volume,
  priceChange,
  graph
}) => {
  return (
    <Wrapper>
      <Logo alt="logo" src={logo} />
      <Title>{name}</Title>
      <SubTitle>{marketCap}</SubTitle>
      <SubTitle>{price}</SubTitle>
      <SubTitle>{volume}</SubTitle>
      <SubTitle>{priceChange}</SubTitle>
      <XYPlot height={100} width={200}>
        <LineSeries data={graph} />
      </XYPlot>
    </Wrapper>
  );
};

export default StockCard;
