import React from "react";
import Login from "../Login";
import Registration from "../Registration";
import { Route } from "react-router";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/login/" component={Login} />
      <Route path="/registration/" component={Registration} />
    </div>
  );
};

export default App;
