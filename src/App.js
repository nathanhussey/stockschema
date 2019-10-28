import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./containers/homepage/Hompage";
import CompanyPage from "./containers/companyPage/CompanyPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/company-page" component={CompanyPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
