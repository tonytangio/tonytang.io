import React, { Component } from "react";

import Landing from "./components/landing/Landing.js";

import "./css/layout.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
