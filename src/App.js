import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Data from "./data.json";
import Image from "./images/6_Berlin.jpg";
import HomeImage from "./images/img-home.jpg";


function App() {
  return (
    <Router>
     <Navbar/>
     
      <Switch>
        <Route path="/Home" exact component={()=><Home  image={HomeImage}/>} />
        <Route path="/Gallery" exact component={() => <Gallery data={Data} />} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Contact" exact component={()=><Contact  image={Image}/>} />
      </Switch>
    </Router>
  );
}

export default App;
