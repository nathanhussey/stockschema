import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./containers/homepage/Hompage";
import CompanyPage from "./containers/companyPage/CompanyPage";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/company-page/:symbol" component={CompanyPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
