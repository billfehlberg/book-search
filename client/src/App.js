import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Top from "./components/Top";


function App() {
  return (
    <Router>
      <div>
        <Top></Top>
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/books" component={Search} />
          <Route exact path="/books/:id" component={Search} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

