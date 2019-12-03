import React, { useState, useEffect } from "react";
import { Treemap } from "react-vis";
import "./FinancialsTreemapCard.scss";
import styled from "styled-components";
import borders from "react-vis/dist/plot/borders";

//top: ${props => props.hoverPosition[1]}px;
//left: ${props => props.hoverPosition[0]}px;
const ToolTip = styled.span`
  top: ${props => props.hoverPosition[1]}px;
  left: ${props => props.hoverPosition[0]}px;
  height: auto;
  width: 200px;
  position: absolute;
  background-color: #fafafa;
  box-shadow: 0px 0px 5px #4b4b4b;
  border-radius: 4px;
`;

const Button = styled.button`
  font-size: 18px;
  margin: 4em 2em 1em 2em;
  border: none;
`;

const CirclePackStatements = styled.div`
  display: flex;
  justify-content: center;
  max-width: 84em;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
`;
const Title = styled.div`
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  max-width: 84em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  flex-wrap: wrap;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
`;
const TreeContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
const FinancialsTreemapCard = ({
  income,
  balanceSheet,
  cashFlow,
  companyName
}) => {
  const [hoverPosition, setHoverPosition] = useState([]);
  const [hoverInfo, setHoverInfo] = useState("");
  const [data, setData] = useState("");
  const [renderGraph, setRenderGraph] = useState(false);
  const [graphSizeX, setGraphSizeX] = useState(window.innerWidth);
  const [graphSizeY, setGraphSizeY] = useState(window.innerHeight);
  const [toolTip, setToolTip] = useState(false);
  useEffect(() => {
    if (!income === false) {
      setData(income);
      setRenderGraph(true);
    }
  }, [income]);

  const handleGraphChange = e => {
    setData(e);
  };

  //formats data so it it can be used in circlePack
  const circlePackFormat = x => {
    if (!x === false) {
      console.log(x);
      delete x[0]["reportDate"];
      x = x[0];
      let childrenArray = [];
      const postiveValue = [
        "currentCash",
        "shortTermInvestments",
        "receivables",
        "inventory",
        "otherCurrentAssets",
        "currentAssets",
        "longTermInvestments",
        "propertyPlantEquipment",
        "goodwill",
        "intangibleAssets",
        "otherAssets",
        "totalAssets",
        "totalRevenue",
        "grossProfit",
        "operatingIncome",
        "otherIncomeExpenseNet",
        "ebit",
        "pretaxIncome",
        "netIncome",
        "netIncomeBasic",
        "cashFlow"
      ];
      const negativeValue = [
        "accountsPayable",
        "currentLongTermDebt",
        "otherCurrentLiabilities",
        "totalCurrentLiabilities",
        "longTermDebt",
        "otherLiabilities",
        "minorityInterest",
        "totalLiabilities",
        "costOfRevenue",
        "researchAndDevelopment",
        "sellingGeneralAndAdmin",
        "operatingExpense",
        "interestIncome",
        "incomeTax",
        "minorityInterest"
      ];
      const neutralValue = [
        "commonStock",
        "retainedEarnings",
        "treasuryStock",
        "capitalSurplus",
        "shareholderEquity",
        "netTangibleAssets"
      ];
      const colorType = {
        positive: "#84AF9B",
        negative: "#E4B7B2",
        neutral: "#FFFBDD",
        default: "#9DC8DD"
      };

      // setting color based on title
      for (let key in x) {
        if (postiveValue.includes(key)) {
          let obj = { title: key, color: colorType.positive, size: x[key] };
          childrenArray.push(obj);
        } else if (negativeValue.includes(key)) {
          let obj = { title: key, color: colorType.negative, size: x[key] };
          childrenArray.push(obj);
        } else if (neutralValue.includes(key)) {
          let obj = { title: key, color: colorType.neutral, size: x[key] };
          childrenArray.push(obj);
        } else {
          let obj = { title: key, color: colorType.default, size: x[key] };
          childrenArray.push(obj);
        }
      }

      x = { title: "", color: "#ffffff", children: childrenArray };
      return x;
    }
  };

  const selected = {
    color: "blue",
    borderBottom: "solid"
  };
  const notSelected = {
    color: "black"
  };
  return (
    <div>
      <Title>{companyName}</Title>
      <CirclePackStatements>
        <Container>
          <Button
            onClick={() => handleGraphChange(income)}
            style={data === income ? selected : notSelected}
          >
            Income
          </Button>
          <Button
            onClick={() => handleGraphChange(balanceSheet)}
            style={data === balanceSheet ? selected : notSelected}
          >
            Balance Sheet{" "}
          </Button>
          <Button
            onClick={() => handleGraphChange(cashFlow)}
            style={data === cashFlow ? selected : notSelected}
          >
            Cash Flow
          </Button>
        </Container>

        {renderGraph ? (
          <TreeContainer>
            <Treemap
              animation={true}
              colorType={"literal"}
              mode={"circlePack"}
              title={"Financials"}
              width={graphSizeX}
              height={graphSizeY}
              data={circlePackFormat(data)}
              onLeafMouseOver={leafNode => {
                setToolTip(true);
                let positionX = leafNode.x - 100;
                let positionY = leafNode.y - leafNode.r;

                if (leafNode.parent === null) {
                  setToolTip(false);
                } else {
                  setHoverInfo({
                    title: leafNode.data.title,
                    value: `$${leafNode.value}`
                  });
                  setHoverPosition([positionX, positionY]);
                }
              }}
              onLeafMouseOut={e => {
                setHoverPosition([]);
                setHoverInfo("");
                setToolTip(false);
              }}
            ></Treemap>
            {toolTip ? (
              <ToolTip hoverPosition={hoverPosition}>
                <div>{hoverInfo.title}</div>
                <div>{hoverInfo.value}</div>
              </ToolTip>
            ) : null}
          </TreeContainer>
        ) : null}
      </CirclePackStatements>
    </div>
  );
};

export default FinancialsTreemapCard;
