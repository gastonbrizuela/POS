import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Screens
import Pos from "./screens/Pos";
import Login from "./screens/Login";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/pos" component={Pos} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
