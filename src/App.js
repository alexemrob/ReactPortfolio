
import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {

  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
