import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Data from "./data.json";
import Image from "./images/6_Berlin.jpg";
//import HomeImage from "./images/img-home.jpg";


function App() {
  
  return (
    <Router>
     <Navbar/>
     
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Gallery" exact component={() => <Gallery data={Data} />} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/Contact" exact component={()=><Contact  image={Image}/>} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
