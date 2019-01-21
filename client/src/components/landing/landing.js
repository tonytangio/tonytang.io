import React, { Component } from "react";
// import GithubIcon from "../public/images/github-icon.svg";
import SVG from "react-inlinesvg";
// import Icon from "@material-ui/core/Icon";
import GithubIcon from "./icons/github-icon.svg";
import LinkedInIcon from "./icons/linkedin-icon.svg";
import EmailIcon from "./icons/email-icon.svg";

class Landing extends Component {
  render() {
    return (
      <header id="landing">
        <div id="main-container">
          <div id="greeting">Hi, I'm</div>
          <div id="banner">
            <div id="name">Tony Tang</div>
            <div id="statement">
              <div>Sydney</div>
              <div id="vertical-separator" />
              <div id="roles">
                <div className="role">Software Engineer</div>
                <div className="role">Designer</div>
                <div className="role">Leader</div>
              </div>
            </div>
          </div>
          <div id="under-banner">
            <div id="links">
              <a
                href="https://github.com/Mysterise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src={GithubIcon} className="svg-link" />
              </a>
              <a
                href="https://www.linkedin.com/in/tonytangio/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ "padding-left": "5px" }}
              >
                <SVG src={LinkedInIcon} className="svg-link" />
              </a>
              <a
                href="mailto:tonytang.dev@gmail.com"
                style={{ "padding-left": "5px" }}
              >
                <SVG src={EmailIcon} className="svg-link" />
              </a>
            </div>
          </div>
        </div>
      </header >
    );
  }
}

export default Landing;
