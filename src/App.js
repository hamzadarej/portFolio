import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { SliderData } from "./components/SliderData";


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route path="/Skills" exact component={Skills} />
        <Route
          path="/Projects"
          exact
          component={() => <Projects slides={SliderData} />}
        ></Route>

        <Route
          path="/Contact"
          exact
          component={() => <Contact  />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
