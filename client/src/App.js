import React, { Component } from "react";
import "./css/layout.css";
// import GithubIcon from "../public/images/github-icon.svg";
import Icon from "@material-ui/core/Icon";

class App extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-main-container">
          <div className="landing-greeting">Hi, I'm</div>
          <div className="landing-content">
            <div className="landing-name-box">
              <div className="landing-name">Tony Tang</div>
            </div>
            <div className="landing-details">
              Sydney based
              <div id="vertical-separator" />
              <div className="landing-details-roles">
                <div className="landing-details-role">Software Engineer</div>
                <div className="landing-details-role">Designer</div>
                <div className="landing-details-role">Leader</div>
              </div>
              <div id="github-icon" />
              {/* <div id="links">
                <GithubIcon />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
