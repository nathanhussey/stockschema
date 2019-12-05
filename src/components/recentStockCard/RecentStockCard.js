import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20em;
  margin: 1em 1em 1em 0;
  padding: 1em;
  text-align: center;
  box-shadow: 0px 0px 4px #4b4b4b;
  border-radius: 2px;
`;

const RecentStockCard = ({ history, ticker, name }) => {
  const handleClickWrapper = () => {
    history.push(`/company-page/${ticker}/${name}`);
  };

  return <Wrapper onClick={handleClickWrapper}>{name}</Wrapper>;
};
export default withRouter(RecentStockCard);
