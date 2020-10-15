import React from "react";
import Header from "./components/Header/Header";
import Following from "./components/Following/Following";
import Repos from "./components/Repos/Repos";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="home">
          <Home />
        </Route>
        <Route path="following">
          <Following />
        </Route>
        <Route path="repos">
          <Repos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
