import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MyNavbar from "./components/MyNavbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <img src={logo} className="App-logo" alt="logo" />
      <Footer />
    </div>
  );
}

export default App;
