import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./containers/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    < Router >
      <NavBar />
      <Route exact path = "/" component = {MainPage}/>
      <Footer />
    </Router>
  );
}

export default App;