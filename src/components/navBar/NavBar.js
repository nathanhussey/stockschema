import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 84em;
  height: 5em;
  background-color: #8acb88;
  flex-wrap: wrap;
`;
const Beta = styled.h1`
  margin: 0;
  color: black;
`;
const SearchBar = styled.input`
  visibility: hidden;
  height: 3em;
  width: 15em;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  visibility: hidden;
`;

const Login = styled.button`
  visibility: hidden;
`;
const SignUp = styled.button`
  visibility: hidden;
`;

const NavBar = () => {
  const [searchInput, setSearchInput] = useState();
  return (
    <Nav>
      <Beta>Beta</Beta>
      <div>
        <SearchBar></SearchBar>
        <SearchButton>Button</SearchButton>
      </div>
      <div>
        <Login />
        <SignUp />
      </div>
    </Nav>
  );
};

export default NavBar;
