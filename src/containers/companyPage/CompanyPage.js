import React, { useState, useEffect } from "react";
import FinancialsTreemap from "../../components/financialsTreemapCard/FinancialsTreemapCard";

const CompanyPage = ({ match }) => {
  const [info, setInfo] = useState("");
  const [income, setIncome] = useState(false);
  const [balanceSheet, setBalanceSheet] = useState(false);
  const [cashFlow, setCashFlow] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(false);
  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${match.params.symbol}/batch?types=company,income,balance-sheet,cash-flow&period=annual&token=${process.env.REACT_APP_IEX_TOKEN}`
    )
      .then(response => response.json())
      .then(data => {
        setInfo(data);
        console.log(data);
        setCompanyInfo(data.company.companyName);
        setIncome(data.income.income);
        setBalanceSheet(data["balance-sheet"].balancesheet);
        setCashFlow(data["cash-flow"].cashflow);
      });
  }, []);

  return (
    <div>
      <FinancialsTreemap
        income={income}
        balanceSheet={balanceSheet}
        cashFlow={cashFlow}
        companyName={companyInfo}
      />
    </div>
  );
};

export default CompanyPage;
