import React, { useState, useEffect } from "react";
import { Treemap } from "react-vis";
import "./FinancialsTreemapCard.scss";
import styled from "styled-components";

//top: ${props => props.hoverPosition[1]}px;
//left: ${props => props.hoverPosition[0]}px;
const ToolTip = styled.span`
  top: ${props => props.hoverPosition[1]}px;
  left: ${props => props.hoverPosition[0]}px;
  height: 80px;
  width: 200px;
  position: absolute;
  background-color: blueviolet;
`;

const Button = styled.button`
  font-size: 18px;
  margin: 1em;
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const FinancialsTreemapCard = ({ income, balanceSheet, cashFlow }) => {
  const [hoverPosition, setHoverPosition] = useState([]);
  const [hoverInfo, setHoverInfo] = useState("");
  const [data, setData] = useState("");
  const [renderGraph, setRenderGraph] = useState(false);
  const [graphSizeX, setGraphSizeX] = useState(900);
  const [graphSizeY, setGraphSizeY] = useState(900);
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

  const circlePackFormat = x => {
    if (!x === false) {
      delete x[0]["reportDate"];
      x = x[0];
      let childrenArray = [];
      for (let key in x) {
        let obj = { title: key, color: "#12939A", size: x[key] };
        childrenArray.push(obj);
      }

      x = { title: "", color: "#ffffff", children: childrenArray };
      return x;
    }
    return x;
  };
  console.log(income);
  return (
    <div>
      <CirclePackStatements>
        <Button onClick={() => handleGraphChange(income)}>Income</Button>
        <Button onClick={() => handleGraphChange(balanceSheet)}>
          Balance Sheet{" "}
        </Button>
        <Button onClick={() => handleGraphChange(cashFlow)}>Cash Flow</Button>

        {renderGraph ? (
          <Container>
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
                let positionX =
                  leafNode.x - (graphSizeX - 345) + window.innerWidth * 0.5;
                let positionY = leafNode.y - leafNode.r;
                console.log(leafNode);
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
          </Container>
        ) : null}
      </CirclePackStatements>
    </div>
  );
};

export default FinancialsTreemapCard;
