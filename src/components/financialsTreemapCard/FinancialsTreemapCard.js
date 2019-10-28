import React, { useState } from "react";
import { Treemap } from "react-vis";
import "./FinancialsTreemapCard.scss";
import styled from "styled-components";

const ToolTip = styled.span`
  position: absolute;
  top: ${props => props.hoverPosition[1]}px;
  left: ${props => props.hoverPosition[0]}px;
  background-color: blueviolet;
  height: 80px;
  width: 200px;
`;

const FinancialsTreemapCard = ({ income, balanceSheet, cashFlow }) => {
  const [statement, setStatement] = useState({
    color: "#ffffff",
    children: [
      { title: "", color: "#005073", size: 3938 },
      { title: "CommunityStructure", color: "#005073", size: 13812 },
      { title: "HierarchicalCluster", color: "#005073", size: 6714 },
      { title: "MergeEdge", color: "#005073", size: 743 },
      { title: "BetweennessCentrality", color: "#107dac", size: 3534 },
      { title: "LinkDistance", color: "#107dac", size: 5731 },
      { title: "MaxFlowMinCut", color: "#107dac", size: 7840 },
      { title: "ShortestPaths", color: "#107dac", size: 5914 },
      { title: "SpanningTree", color: "#107dac", size: 3416 },
      { title: "AspectRatioBanker", color: "	#189ad3", size: 7074 }
    ]
  });
  const [hoverPosition, setHoverPosition] = useState([]);
  const [hoverInfo, setHoverInfo] = useState("");

  return (
    <div>
      <Treemap
        colorType={"literal"}
        mode={"circlePack"}
        title={"Financials"}
        width={500}
        height={500}
        data={statement}
        onLeafMouseOver={leafNode => {
          let positionX = leafNode.x - 100;
          let positionY = leafNode.y - leafNode.r - 80;
          console.log(leafNode);
          setHoverInfo({
            title: leafNode.data.title,
            value: `$${leafNode.value}`
          });
          setHoverPosition([positionX, positionY]);
        }}
      ></Treemap>
      <ToolTip hoverPosition={hoverPosition}>
        <div>{hoverInfo.title}</div>
        <div>{hoverInfo.value}</div>
      </ToolTip>
    </div>
  );
};

export default FinancialsTreemapCard;
