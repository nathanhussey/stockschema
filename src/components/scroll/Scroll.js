import React from "react";
import styled from "styled-components";

const ScrollDiv = styled.div`
  overflow-x: scroll;
  height: 800px;
`;

const Scroll = props => {
  return <ScrollDiv>{props.children}</ScrollDiv>;
};

export default Scroll;
