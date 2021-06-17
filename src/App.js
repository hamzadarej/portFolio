import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";
import Data from "./data.json";
import Image from "./images/koenigssee-11.jpg"
function App() {
  return (
    <Router>
      <Home/>
      <Switch>
        <Route path="/" exact component={Gallery} />
        <Route path="/About" exact component={() => <About data={Data} />} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Contact" exact component={()=><Contact  image={Image}/>} />
      </Switch>
    </Router>
  );
}

export default App;
