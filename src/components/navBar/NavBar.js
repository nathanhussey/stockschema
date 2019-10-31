import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  max-width: 84em;
  height: 4em;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
`;
const Beta = styled.h1`
  color: green;
`;

const NavBar = () => {
  return (
    <div>
      <Nav>
        <Beta>Currently in Beta - stock information is not accurate</Beta>
      </Nav>
    </div>
  );
};

export default NavBar;
