import React, { Component } from "react";

import "./css/layout.css";
import Landing from "./components/landing/Landing.js";

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
