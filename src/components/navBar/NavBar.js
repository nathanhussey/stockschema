import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect, withRouter } from "react-router-dom";

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
  margin: 0 0.5em;
  color: black;
`;
const SearchDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
const SearchBar = styled.input`
  height: 1.9em;
  width: 15em;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  display: flex;
  height: 2.4em;
  border-radius: 5px;
`;

const Invalid = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  right: 9em;
  font-size: 1.5em;
  color: darkgreen;
  margin: 0 0.5em;
`;

const Login = styled.button`
  visibility: hidden;
`;
const SignUp = styled.button`
  visibility: hidden;
`;

const NavBar = ({ history }) => {
  const [searchInput, setSearchInput] = useState("");
  const [redirectPage, setRedirectPage] = useState("");
  const [invalidMessage, setInvalidMessage] = useState(false);

  const handleSearchButton = () => {
    //fetch from api
    fetch(
      `https://sandbox.iexapis.com/stable/stock/${searchInput}/price/?token=${process.env.REACT_APP_IEX_TOKEN}`
    )
      //if ticker exists redirect to company page
      .then(response => response.json())
      .then(data => {
        console.log(data);
        history.push(`/company-page/${searchInput}`);
      })
      //if not return this is an invalid ticker
      .catch(err => {
        console.log(err);
        setInvalidMessage(true);
      });
  };

  const handleSearchChange = e => {
    setSearchInput(e.target.value);
    setInvalidMessage(false);
  };
  const handleClickLogo = () => {
    history.push(`/`);
  };

  const keyPress = e => {
    if (e.key === "Enter") {
      handleSearchButton();
    }
  };

  let errorMessage;
  if (invalidMessage) {
    errorMessage = <Invalid>Invalid</Invalid>;
  }

  return (
    <Nav>
      <Beta onClick={handleClickLogo}>Beta</Beta>
      <SearchDiv>
        {errorMessage}
        <SearchBar
          type="text"
          onKeyDown={keyPress}
          placeholder="Search Ticker..."
          value={searchInput}
          onChange={handleSearchChange}
        ></SearchBar>
        <SearchButton onClick={handleSearchButton}>Search</SearchButton>
      </SearchDiv>
      <div>
        <Login />
        <SignUp />
      </div>
    </Nav>
  );
};

export default withRouter(NavBar);
