import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";
import Data from "./data.json";
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={() => <About data={Data} />} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
