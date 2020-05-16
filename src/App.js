import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutMe from "./containers/AboutMe/AboutMe";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";

// Projects component still required
// Use a grid when inserting them

function App() {
  return (
    < Router >
      <NavBar />
      <Route exact path = "/" component = {AboutMe}/>
      <Route exact path = "/Portfolio" component = {Portfolio}/>
      <Route exact path = "/Contact" component = {Contact}/>
      <Footer />
    </Router>
  );
}

export default App;