import React, { Component } from "react";
// import GithubIcon from "../public/images/github-icon.svg";
import SVG from "react-inlinesvg";
import Icon from "@material-ui/core/Icon";
import GithubIcon from "./icons/github-icon.svg";
import LinkedInIcon from "./icons/linkedin-icon.svg";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-main-container">
          <div className="landing-greeting">
            <span>Hi, I'm</span>
          </div>
          <div className="landing-content">
            <div className="landing-name-box">
              <div className="landing-name">Tony Tang</div>
            </div>
            <div className="landing-details">
              <div id="landing-statement">
                Sydney based
                <div id="vertical-separator" />
                <div className="landing-details-roles">
                  <div className="landing-details-role">Software Engineer</div>
                  <div className="landing-details-role">Designer</div>
                  <div className="landing-details-role">Leader</div>
                </div>
              </div>
              <div id="landing-links">
                <a
                  href="https://github.com/Mysterise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SVG src={GithubIcon} className="svg-link" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tonyztang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SVG src={LinkedInIcon} className="svg-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
