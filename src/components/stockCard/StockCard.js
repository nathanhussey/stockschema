import React from "react";
import { XYPlot, LineSeries } from "react-vis";
import "./StockCard.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const Logo = styled.img`
  margin: 0px 5px 0px 5px;
  width: 3em;
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
      <Title>
        <Logo alt="logo" src={logo} />
        {name}
      </Title>
      <LgSubTitle>{marketCap}</LgSubTitle>
      <SubTitle>{price}</SubTitle>
      <LgSubTitle>{volume}</LgSubTitle>
      <SubTitle>{priceChange}</SubTitle>
      <XYPlot height={100} width={200}>
        <LineSeries data={graph} />
      </XYPlot>
    </Wrapper>
  );
};

export default StockCard;
