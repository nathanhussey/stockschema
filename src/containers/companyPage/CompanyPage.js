import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRecentStocksReducer,
  subtractRecentStock
} from "../recentStocksList/actions";
import FinancialsTreemap from "../../components/financialsTreemapCard/FinancialsTreemapCard";
import NavBar from "../../components/navBar/NavBar";

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
      })
      .then(data1 => {
        if (
          recentStocks.some(stock => {
            return stock.ticker === match.params.symbol;
          })
        ) {
        } else if (recentStocks.length === 5) {
          console.log(match.params);
          dispatch(
            subtractRecentStock({
              ticker: match.params.symbol,
              name: match.params.name
            })
          );
        } else {
          console.log(match.params);
          dispatch(
            setRecentStocksReducer({
              ticker: match.params.symbol,
              name: match.params.name
            })
          );
        }
      })

      .catch(error => "the error");
  }, [match]);

  const dispatch = useDispatch();
  const recentStocks = useSelector(state => state.recentStocks);
  return (
    <div>
      <NavBar />
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
