import React, { useState, useEffect } from "react";
import FinancialsTreemap from "../../components/financialsTreemapCard/FinancialsTreemapCard";

const CompanyPage = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/aapl/batch?types=income,balance-sheet,cash-flow&period=annual&token=${process.env.REACT_APP_IEX_TOKEN}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInfo(data);
      });
  }, []);

  const circlePackFormat = () => {};
  return (
    <div>
      <FinancialsTreemap />
    </div>
  );
};

export default CompanyPage;
